import Modal from "../../../components/Modal/Modal";
import { Subheader } from "../../../styles/typography/headers.styles";
import closeIcon from "../../../assets/icons/close.svg";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  InputLabel,
  InputText,
  InputDropdown,
} from "../../../styles/typography/inputs.styles";
import { stringDateToISO } from "../../../utils/stringDateToISO";
import { AddFileForm as AddApptForm } from "../Documents/AddFile.styles";
import { getCategories } from "../../../api/categories.api";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import NewAppointmentSuccess from "./NewAppointmentSuccess";
import { addAppointment } from "../../../api/medicalVisits.api";

const NewAppointment = ({ closeModal }) => {
  const history = useHistory();
  const comingFromMainDashboard = history.location.newAppt;

  const [form, setForm] = useState({
    name: "",
    category: "all",
    date: "",
    notification: 0,
    isRegular: false,
    regularity: 0,
    isDone: false
  });

  const [isCreationSuccess, setIsCreationSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [toggleModalOpen] = useState(true);
  const [categories, setCategories] = useState([]);

  const redirectAfterClose = () => {
    if (comingFromMainDashboard) {
      history.push('/app/dashboard');
    }
  }

  const nextStepHandler = () => {
    if (isFormValid) {
      addAppointment(process.env.REACT_APP_TEST_USER, form)
        .then((res) => {
          if (res.status == 201) {
            setIsCreationSuccess(true);
          } else {
            setIsCreationSuccess(false);
          }
        });
    };
  };

  const createAnother = () => {
    setIsFormValid(false);
    setIsCreationSuccess(false);
    setForm({
      name: "",
      category: "all",
      date: "",
      notification: 0,
      isRegular: false,
      regularity: null,
    });
  };

  useEffect(() => {
    const condition = form.name && form.category && form.date && form.notification;
    if (condition) {
      setIsFormValid(true);
    } else setIsFormValid(false);
  }, [form]);

  useEffect(() => {
    getCategories(process.env.REACT_APP_TEST_USER).then((res) => {
      const data = res.data;
      if (data !== undefined && data?.length > 0) {
        setCategories(data);
      } else {
        setCategories([]);
      }
    });
  }, []);

  return (
    <>
      {toggleModalOpen && (
        <Modal situation="adaptHeight">
          {isCreationSuccess ? (
            <NewAppointmentSuccess
              closeWindow={() => {
                closeModal();
                redirectAfterClose();
              }}
              createAnother={() => createAnother()}
            />
          ) : (
            <>
              <div className="header">
                <Subheader>New appointment</Subheader>
                <img
                  onClick={() => { 
                    closeModal();
                    redirectAfterClose();
                  }}
                  className="close-icon"
                  src={closeIcon}
                  alt="Close icon"
                />
              </div>
              <AddApptForm id="appointmentForm">
                <InputLabel>
                  Name
                  <InputText
                    name="name"
                    placeholder="ex. RTG left knee"
                    type="text"
                    onInput={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </InputLabel>
                <InputLabel>
                  Category
                  <InputDropdown
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    name="category"
                  >
                    <option disabled>Select a category: </option>
                    {categories.length > 0 &&
                      categories.map((el) => {
                        return (
                          <option key={el} value={el} name={el}>
                            {el}
                          </option>
                        );
                      })}
                  </InputDropdown>
                </InputLabel>
                <InputLabel>
                  Date
                  <InputText
                    onChange={(e) =>
                      setForm({
                        ...form,
                        date: stringDateToISO(e.target.value),
                      })
                    }
                    name="date"
                    type="date"
                  />
                </InputLabel>
                <InputLabel>
                  Notification
                  <InputDropdown
                    onChange={(e) =>
                      setForm({ ...form, notification: Number(e.target.value) })
                    }
                    name="notification"
                  >
                    <option value="0">1 day before</option>
                    <option value="1">2 days before</option>
                    <option value="2">1 week before</option>
                  </InputDropdown>
                </InputLabel>
                <InputLabel>
                  <input
                    onChange={(e) =>
                      setForm({ ...form, isRegular: e.target.checked })
                    }
                    name="isRegular"
                    type="checkbox"
                  />
                  Set as a regular appointment
                </InputLabel>
                {form.isRegular && (
                  <InputLabel>
                    Remind me every
                    <InputText
                      name="regularity"
                      placeholder="ex. 2"
                      type="number"
                      onInput={(e) =>
                        setForm({ ...form, regularity: e.target.value })
                      }
                    />
                    months
                  </InputLabel>
                )}
              </AddApptForm>
              <div className="bottom-btns">
                <PrimaryButton disabled={!isFormValid} event={nextStepHandler}>
                  Next
                </PrimaryButton>
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default NewAppointment;
