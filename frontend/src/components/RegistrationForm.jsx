import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        agreeToPolicy: false
    });
        
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
        
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
                
        if (formErrors[name]) {
            setFormErrors(prev => ({
            ...prev,
            [name]: ''
            }));
        }
    };
        
    const validate = () => {
        const errors = {};
        
        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        }
        
        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        
        if (!formData.agreeToPolicy) {
            errors.agreeToPolicy = 'You must agree to the privacy policy';
        }
        
        return errors;
    };
        
    const handleSubmit = async () => {
        const errors = validate();
        setFormErrors(errors);
        
        if (Object.keys(errors).length === 0) {
            
            // console.log(formData);

            try {
                setIsSubmitting(true);
                const { data } = await axiosInstance.post('user/register', formData);
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
                console.log(data);
            } catch (err) {
                console.log(err.message);
            } finally {
                setIsSubmitting(false);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    agreeToPolicy: false
                });
            }            
        }
    };
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {isSuccess ? (
            <div className="text-center py-8">
                <div className="text-green-600 text-xl mb-2">Registration Successful!</div>
                <p className="text-gray-700">Thank you for registering. We look forward to seeing you at the event.</p>
            </div>
        ) : (
            <div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className={`w-full text-black p-3 bg-gray-200 rounded ${formErrors.firstName ? 'border border-red-500' : ''}`}
                    />
                    {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
                </div>
                
                <div className="mb-4">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className={`w-full text-black p-3 bg-gray-200 rounded ${formErrors.lastName ? 'border border-red-500' : ''}`}
                    />
                    {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
                </div>
                
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={`w-full text-black p-3 bg-gray-200 rounded ${formErrors.email ? 'border border-red-500' : ''}`}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div className="mb-4">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full text-black p-3 bg-gray-200 rounded h-32 resize-none"
                    ></textarea>
                </div>
                
                <div className="mb-6">
                <label className="flex items-start text-sm text-gray-700">
                    <input
                        type="checkbox"
                        name="agreeToPolicy"
                        checked={formData.agreeToPolicy}
                        onChange={handleChange}
                        className={`mr-2 mt-1 ${formErrors.agreeToPolicy ? 'border border-red-500' : ''}`}
                    />
                    <span>
                        By filling out the registration form to attend our event, you agree and consent to 
                        <a href="#" className="text-blue-700 hover:underline ml-1">Cogent Solutions Privacy Policy</a>.
                    </span>
                </label>
                    {formErrors.agreeToPolicy && <p className="text-red-500 text-sm mt-1">{formErrors.agreeToPolicy}</p>}
                </div>
                
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-blue-900 transition-colors hover:cursor-pointer"
                    >
                    {isSubmitting ? 'Submitting...' : 'Register'}
                </button>
            </div>
        )}
      </div>
    );
  };

export default RegistrationForm;