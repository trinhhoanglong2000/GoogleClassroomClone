import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getAccount = async () => {
  let data = null;
  await axios

    .get(`${URL}/Account`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};

export const getAllClass = async () => {
  let data = null;
  await axios

    .get(`${URL}/classes`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};
export const getAllAccountFromClass = async (id) => {
  let data = null;
  await axios

    .get(`${URL}/classesaccount/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      data = error.response.data;
    });

  return data;
};

export const createClass = async (name, Section, Subject, Room) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/classes/addClass`,
      {
        name: name,
        section: Section,
        subject: Subject,
        room: Room,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};

export const updateAccount = async (
  firstname,
  lastname,
  password,
  dob,
  studentid
) => {
  let message = null;
  const test = await axios
    .post(
      `${URL}/Account/Update`,
      {
        firstname: firstname,
        lastname: lastname,
        password: password,
        dob: dob,
        student_id:studentid,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const Login = async (name, password) => {
  let message = null;
  const test = await axios
    .post(`${URL}/login`, {
      username: name,
      password: password,
    })
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
export const Register = async (
  firstname,
  lastname,
  email,
  password,
  phone,

  dob,
  gender
) => {
  let message = null;
  const test = await axios
    .post(`${URL}/register`, {
      firstname: firstname,
      lastname: lastname,
      username: email,
      password: password,
      phone: phone,

      dob: dob,
      gender: gender,
    })
    .catch((error) => {
      message = error.response.data;
    });
  if (message != null) return message;
  return test.data;
};
