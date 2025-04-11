const fetch = require("node-fetch");

const testRegister = async () => {
  const response = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "test@example.com", password: "123456" }),
  });

  const data = await response.text();
  console.log(data);
};

testRegister();