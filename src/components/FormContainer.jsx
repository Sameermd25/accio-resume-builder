import { useDispatch, useSelector } from "react-redux";
import {updateData, updateFormRender, updateStoreData, updateBackRender,} from "../features/formDataSlice";
import { FORM_SECTIONS, getLabel,SECTION_TITLES,  isRequiredFieldsFilled, validateField,} from "../constant";
import { useNavigate } from "react-router-dom";
import RenderingBasicForm from "./RenderBasicForm";
import NestedForm from "./NestedForm";
import { useEffect, useState } from "react";


function FormContainer({ setSubmittedFormCount, submittedFormCount }) {
  const currentForm = useSelector((state) => state.formData.currentForm);
  const renderingArray = useSelector((state) => state.formData.renderingQuestions);
  const darkMode = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sectionTitle = SECTION_TITLES[currentForm];
  const isFinalSection = [FORM_SECTIONS.CERTIFICATIONS].includes(currentForm);
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  // check if the current form section has subsections
  let isNested = false;
  //  Check if renderingArray exists and is an object (not an array)
  if (
    renderingArray &&
    typeof renderingArray === "object" &&
    !Array.isArray(renderingArray)
  ) {
    // Get all the values inside the object
    const values = Object.values(renderingArray || {});
    // Check if every value inside the object is an array Get all the values inside the object
    const allValuesAreArrays = values.every((value) => Array.isArray(value));
    isNested = allValuesAreArrays;
  }
  // On submit of form
  function getData(e) {
    e.preventDefault();

    // If already disabled stop multiple submits
    if (isDisabled) return;

    // Validate all fields filled
    if (!isRequiredFieldsFilled(renderingArray)) {
      return;
    }
    // Data update in store (MOVED BEFORE THE IF CHECK)
    dispatch(updateFormRender());

    // Check if current form is last form - USE isFinalSection instead!
    if (isFinalSection) {
      // Mark all forms as filled
    localStorage.setItem("isAllFormsFilled", "true");
      navigate("/preview");
    }
    // Update count of form submitted count in local storage
    localStorage.setItem("submittedFormCount", submittedFormCount + 1);

    // Increase form submit count
    setSubmittedFormCount((prev) => prev + 1);
  }
  // Update answer for each question in store
  function inputChange(text, item, subSectionKey = null) {
    // UPDATE FIELD VALUE , VALIDATE
    const updatedItem = { ...item, answer: text };

    // Run validation for this specific field
    const result = validateField(updatedItem);

    setErrors((prev) => {
      const copy = { ...prev };

      if (!result.valid) {
        // If field has error → store message
        copy[item.id] = result.message;
        console.log("Item ID:", item.id);
      } else {
        // If field is correct  remove error
        delete copy[item.id];
      }

      return copy;
    });

    dispatch(
      updateData({
        answer: text,
        questionId: item.id,
        section: currentForm,
        subSectionKey: subSectionKey || null, // Ensure it's null if undefined
      })
    );
  }
  // Previous Button Handler
function goBack() {
  dispatch(updateBackRender());
  
  // Decrease the count and update localStorage
  setSubmittedFormCount((prev) => {
    const newCount = Math.max(prev - 1, 1);
    localStorage.setItem("submittedFormCount", newCount);
    return newCount;
  });
}
  // disable button
  useEffect(() => {
    // Check if required fields are filled
    const filled = isRequiredFieldsFilled(renderingArray);
    // Disable button if NOT filled
    setIsDisabled(!filled);
    console.log("Fields filled?", filled);

  }, [renderingArray]);



  return (
    <div
      className={`${
        darkMode ? "bg-gray-600 text-white" : "bg-white text-gray-900"
      } py-8 px-4 rounded-lg shadow-lg w-full h-full flex flex-col transition-colors overflow-hidden`}
    >
      <div className="max-w-3xl mx-auto w-full h-full flex flex-col overflow-hidden">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-4 flex-shrink-0">{sectionTitle}</h2>
        {/* Form */}
 <div className="flex-1 overflow-y-auto scrollbar-hide">
        <form
          className={`${
            darkMode ? "bg-gray-800 shadow-lg text-white" : "bg-white shadow-md"
          } p-6 rounded-lg transition-colors`}
          onSubmit={getData}
        >
          {isNested ? (
            <NestedForm
              nestedData={renderingArray}
              section={currentForm}
              labelFormatter={(key) => getLabel(currentForm, key)}
              inputChange={inputChange}
            />
          ) : (
            <RenderingBasicForm
              questions={
                Array.isArray(renderingArray)
                  ? renderingArray
                  : Object.values(renderingArray || {})
              }
              inputChange={inputChange}
              section={currentForm}
              errors={errors} // error
              labelFormatter={(key) => getLabel(currentForm, key)}
              //  Ensure it's null if undefined
            />
          )}

          {/* Submit Button */}
          <div className="flex justify-end mt-6 relative">
            {/* Previous Button */}
            {currentForm !== FORM_SECTIONS.INTRO && (
              <button
                type="button"
                onClick={goBack}
                className={`${
                  darkMode
                    ? "bg-blue-500 hover:bg-blue-900 text-white"
                    : "bg-red-600 hover:bg-rose-400 text-white"
                } absolute left-0 px-6 py-2.5 rounded-md font-medium cursor-pointer`}
              >
                Previous
              </button>
            )}
            {/* Next / Submit */}
            <button
              type="submit"
              disabled={isDisabled}
              className={`  px-6 py-2.5 rounded-md font-medium transition-colors text-white cursor-pointer
                         ${isDisabled ? "bg-gray-400 cursor-not-allowed": darkMode  ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"}  
                          `}>         
              {isFinalSection ? "Submit" : "Next"}
            </button>
          </div>
        </form>
</div>
      </div>
    </div>
  );
}
export default FormContainer;