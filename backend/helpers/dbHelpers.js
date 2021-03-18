

module.exports = (db) => {
  
    const getUsers = () => {
    const query = {
      text: "SELECT * FROM users_elders",
    };

    return db
      .query(query)
      .then((result) => console.log(result.rows))
      .catch((err) => err);
  };

  const getUserByEmail = (email_address, password) => {
    const query = {
      text: `SELECT * FROM users_elders WHERE email_address LIKE $1;`,
      values: [email_address],
    };

    return db
      .query(query)
      .then((result) => {


        // console.log('results from query', result.rows )
        return result.rows[0]

        
      })
      .catch((err) => err);
  };

  const addUser = (
    fullName,
    age,
    email,
    password,
    phoneNumber,
    postalCode,
    afiliations
  ) => {
    //console.log(`adding user`)
    const query = {
      text: `INSERT INTO users_elders (full_name, age, email_address, password, phone_number, postal_code, belongs_to) VALUES ($1, $2, $3, $4, $5,$6,$7) RETURNING *`,
      values: [
        fullName,
        age,
        email,
        password,
        phoneNumber,
        postalCode,
        afiliations,
      ],
    };

    return db
      .query(query)
      .then((result) => {
        // console.log('id',result.rows[0].id)
        // console.log(`isnide success ful promist from query res from add user / want to return userID for the token: ${result.rows[0].id}`)
        return result.rows[0]
      })
      .catch((err) => {
        console.log(`err on adduser: ${err}`)
        return err
      });
  };

  const addRequest = (
    posted_by,
    date_of_request,
    task_description,
    task_postal_code,
    date_posted,
    fullilled_by_volunter,
    status
  ) => {
    //console.log(`adding user`)
    const query = {
      text: `INSERT INTO requests (posted_by, date_of_request, task_description, task_postal_code, date_posted, fullilled_by_volunter, status) VALUES ($1, $2, $3, $4, $5,$6,$7) RETURNING *`,
      values: [
        posted_by,
        date_of_request,
        task_description,
        task_postal_code,
        date_posted,
        fullilled_by_volunter,
        status
      ],
    };

    return db
      .query(query)
      .then((result) => {
        // console.log('id',result.rows[0].id)
        console.log(`isnide success ful promist from query res from add user / want to return userID for the token: ${result.rows[0].id}`)
        return result.rows[0]
      })
      .catch((err) => {
        console.log(`err on adduser: ${err}`)
        return err
      });
  };



  
  return {
    getUsers,
    getUserByEmail,
    addUser,
    addRequest
  };
  
};
