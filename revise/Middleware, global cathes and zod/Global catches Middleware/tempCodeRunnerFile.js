  const username = req.headers.username;
  const password = req.headers.password;
  console.log(username);
  if (username == "user@gmail.com" ) {
    
    res.status(200).json("login successfully");
  } else {
    res.status(400).send("user dosen't exist");
  }