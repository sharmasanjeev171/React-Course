function Hello() {
  let myName = "Sanjeev";
  let fullName = () => {
    return "Sanjeev Sharma";
  };
  return <h3>Hello I am {fullName()}</h3>;
}
export default Hello;
