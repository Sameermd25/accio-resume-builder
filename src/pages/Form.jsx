
import FormContainer from "../components/FormContainer";
import { lazy, Suspense, useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { updateStoreData } from "../features/formDataSlice";
import { Bounce, ToastContainer } from "react-toastify";
import CircularLoader from "../components/CircularLoader";
const LazyFormImageComponent = lazy(() => import("../components/FormImage"));

function Form() {
  const [submittedFormCount, setSubmittedFormCount] = useState(1);
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.formData);
  const darkMode = useSelector((state) => state.theme);


  useEffect(() => {
    const locallyStoredUserData = localStorage.getItem("userData");

    if (locallyStoredUserData) {
      try {
        const localStorageData = JSON.parse(locallyStoredUserData);
        dispatch(updateStoreData(localStorageData));
      } catch (error) {
        console.error("Corrupted localStorage userData:", error);
        localStorage.removeItem("userData");
      }
    }

    const submittedFormCountStoredInLocal = Number(
      localStorage.getItem("submittedFormCount")
    );

    if (submittedFormCountStoredInLocal) {
      setSubmittedFormCount(submittedFormCountStoredInLocal);
    }
  }, [dispatch]); // Added dispatch to dependencies

  return (
    <div
      className={`${
        darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
      } w-full h-screen flex flex-col items-center p-4 transition-colors overflow-hidden`}
    >
      {/* Progress Bar */}
      <div className="w-full max-w-xl mb-4 flex-shrink-0">
        <ProgressBar
          submittedFormCount={submittedFormCount}
          darkMode={darkMode}
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex items-start justify-between gap-8 flex-1 min-h-0">
        {/* Left Image - hidden on mobile/tablet */}
        <div className="hidden lg:block flex-shrink-0">
          <Suspense fallback={<CircularLoader />}>
            <LazyFormImageComponent />
          </Suspense>
        </div>

        {/* Right Form */}
        <div className="flex-1 h-full min-h-0">
          <FormContainer
            setSubmittedFormCount={setSubmittedFormCount}
            submittedFormCount={submittedFormCount}
          />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default Form;