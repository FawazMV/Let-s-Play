
const ValidateForm = (formData, isLogin) => {
    const newErrors = {};

    if (!formData.name && !isLogin) {
        newErrors.name = "Name is required";
    }
    if (!formData.email) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
        newErrors.password = "Password is required";
    }
    if (!formData.mobile && !isLogin) {
        newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile) && !isLogin) {
        newErrors.mobile = "Mobile number is invalid";
    }
    return newErrors;
}
export default ValidateForm