const ErrorMessage = ({ foodItems }) => {
  return <>{foodItems.length == 0 && <h3>No Healthy Food</h3>}</>;
};
export default ErrorMessage;
