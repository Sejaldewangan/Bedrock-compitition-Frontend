import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { COUNTRIES_DATA } from "@/lib/countriesData";
import api from "@/lib/api";

// const DEPRECATED_INDIAN_STATES = {
//   "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Hyderabad (Old)", "Nellore", "Tirupati", "Guntur", "Anantapur"],
//   "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tezu", "Aalo", "Tawang"],
//   "Assam": ["Guwahati", "Nagaon", "Silchar", "Barpeta", "Udalguri", "Kamrup", "Goalpara"],
//   "Bihar": ["Patna", "Gaya", "Bhagalpur", "Munger", "Darbhanga", "Muzaffarpur", "Buxar"],
//   "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Rajnandgaon", "Raigarh", "Jagdalpur"],
//   "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
//   "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Jamnagar", "Bhavnagar", "Gandhinagar"],
//   "Haryana": ["Faridabad", "Gurgaon", "Hisar", "Rohtak", "Panipat", "Karnal", "Yamunanagar"],
//   "Himachal Pradesh": ["Shimla", "Solan", "Mandi", "Kangra", "Hamirpur", "Kullu"],
//   "Jharkhand": ["Ranchi", "Dhanbad", "Giridih", "Jamshedpur", "Hazaribag", "East Singhbhum"],
//   "Karnataka": ["Bangalore", "Hubli", "Mysore", "Belgaum", "Mangalore", "Gulbarga", "Davangere"],
//   "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Alappuzha", "Kannur"],
//   "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Saguor", "Rewa"],
//   "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Aurangabad", "Nashik", "Kolhapur"],
//   "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Senapati"],
//   "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongstoin", "Goalpara"],
//   "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib"],
//   "Nagaland": ["Kohima", "Dimapur", "Wokha", "Tuensang", "Mon"],
//   "Odisha": ["Bhubaneswar", "Cuttack", "Sambalpur", "Rourkela", "Balasore", "Berhampur"],
//   "Punjab": ["Ludhiana", "Amritsar", "Chandigarh", "Patiala", "Jalandhar", "Bathinda"],
//   "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Ajmer", "Bikaner", "Udaipur", "Alwar"],
//   "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Rangpo"],
//   "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy", "Tirunelveli"],
//   "Telangana": ["Hyderabad", "Secunderabad", "Warangal", "Nizamabad", "Karimnagar"],
//   "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Ambassa", "Kailasahar"],
//   "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Ghaziabad", "Noida", "Agra", "Meerut"],
//   "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Almora", "Rudraprayag", "Pithoragarh"],
//   "West Bengal": ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Darjeeling", "Howrah"],
//   "Andaman & Nicobar": ["Port Blair", "Car Nicobar", "Little Andaman"],
//   "Chandigarh": ["Chandigarh"],
//   "Dadra & Nagar Haveli": ["Silvassa", "Dadra", "Khanvel"],
//   "Daman & Diu": ["Daman", "Diu", "Khor"],
//   "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
//   "Lakshadweep": ["Kavaratti", "Andrott", "Agatti"],
//   "Puducherry": ["Puducherry", "Yanam", "Karaikal", "Mahe"],
//   "Ladakh": ["Leh", "Kargil", "Nyoma", "Diskit"],
// };

export default function Register() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    // Team Information
    teamName: "",
    teamDescription: "",

    // Player Information
    playerName: "",
    playerEmail: "",
    playerPhone: "",
    playerGamerTag: "",
    playerAge: "",

    // Additional Info
    experience: "",
    country: "",
    state: "",
    area: "",
    agreeToRules: false,
    agreeToPrivacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    setError("");
    
    if (currentStep === 1) {
      if (!formData.teamName.trim()) {
        setError("Your name is required");
        return false;
      }
      if (formData.teamName.length < 3) {
        setError("Your name must be at least 3 characters");
        return false;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.playerName.trim()) {
        setError("Player name is required");
        return false;
      }
      if (!formData.playerEmail.trim() || !formData.playerEmail.includes("@")) {
        setError("Valid email is required");
        return false;
      }
      if (!formData.playerGamerTag.trim()) {
        setError("Minecraft gamer tag is required");
        return false;
      }
      if (!formData.playerAge || parseInt(formData.playerAge) < 8) {
        setError("You must be at least 8 years old");
        return false;
      }
    }
    
    if (currentStep === 3) {
      if (!formData.experience) {
        setError("Please select your experience level");
        return false;
      }
      if (!formData.country) {
        setError("Please select your country");
        return false;
      }
      if (!formData.state) {
        setError("Please select your state/region");
        return false;
      }
      if (!formData.area) {
        setError("Please select your area/city");
        return false;
      }
      if (!formData.agreeToRules) {
        setError("You must agree to tournament rules");
        return false;
      }
      if (!formData.agreeToPrivacy) {
        setError("You must agree to the privacy policy");
        return false;
      }
    }
    
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      return;
    }
    
    setLoading(true);
    try {
      // Create register entry
      const registerRes = await api.post("/register", {
        name: formData.teamName,
        description: formData.teamDescription,
      });

      if (!registerRes.data._id) {
        throw new Error("Failed to create register entry");
      }

      // Create player entry
      const playerRes = await api.post("/players", {
        fullName: formData.playerName,
        email: formData.playerEmail,
        minecraftGamerTag: formData.playerGamerTag,
        phoneNumber: formData.playerPhone || null,
        age: parseInt(formData.playerAge),
      });

      if (!playerRes.data._id) {
        throw new Error("Failed to create player entry");
      }

      // Create additional info entry
      const additionalRes = await api.post("/additional-info", {
        experienceLevel: formData.experience,
        state: formData.state,
        area: formData.area,
      });

      if (additionalRes.status === 201 || additionalRes.status === 200) {
        setSubmitted(true);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || err.message || "Failed to submit registration. Please try again.";
      setError(errorMessage);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black minecraft-text">Registration Complete!</h1>
          <p className="text-muted-foreground text-lg">
            Congratulations! Your registration for <span className="text-primary font-bold">{formData.teamName}</span> has been
            successfully submitted for the Bedrock tournament.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 text-left space-y-3">
            <p className="text-sm">
              <span className="text-muted-foreground">Confirmation email sent to:</span>
              <br />
              <span className="font-semibold text-primary">{formData.playerEmail}</span>
            </p>
            <p className="text-sm">
              <span className="text-muted-foreground">Player name:</span>
              <br />
              <span className="font-semibold">{formData.playerName}</span>
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Check your email for further instructions and tournament details.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all w-full"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-semibold hidden sm:inline">Back</span>
          </Link>
          <h1 className="flex-1 text-center text-xl font-bold minecraft-text">Solo Registration</h1>
          <div className="w-12" />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all ${
                    num <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground"
                  }`}
                >
                  {num}
                </div>
                <span className={`text-xs mt-2 text-center ${num <= step ? "text-foreground" : "text-muted-foreground"}`}>
                  {num === 1 && "Your Info"}
                  {num === 2 && "Player Info"}
                  {num === 3 && "Confirm"}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`flex-1 h-1 rounded-full transition-all ${
                  num <= step ? "bg-primary" : "bg-card"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Team Information */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold minecraft-text mb-2">Your Information</h2>
                <p className="text-muted-foreground">Tell us about yourself</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Your Description (Optional)</label>
                  <textarea
                    name="teamDescription"
                    value={formData.teamDescription}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Player Information */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold minecraft-text mb-2">Player Information</h2>
                <p className="text-muted-foreground">Your personal details</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="playerName"
                      value={formData.playerName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Minecraft Gamer Tag</label>
                    <input
                      type="text"
                      name="playerGamerTag"
                      value={formData.playerGamerTag}
                      onChange={handleChange}
                      placeholder="Your in-game username"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="playerEmail"
                    value={formData.playerEmail}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="playerPhone"
                      value={formData.playerPhone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Age</label>
                    <input
                      type="number"
                      name="playerAge"
                      value={formData.playerAge}
                      onChange={handleChange}
                      placeholder="Must be 8+"
                      min="8"
                      max="120"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-bold hover:bg-card/80 transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold minecraft-text mb-2">Review & Confirm</h2>
                <p className="text-muted-foreground">Please review your information before submitting</p>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold minecraft-text mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Experience Level</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="">Select experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                        <option value="professional">Professional/Competitive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="">Select your country</option>
                        {Object.keys(COUNTRIES_DATA).map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">State/Region</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        disabled={!formData.country}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select your state/region</option>
                        {formData.country && Object.keys(COUNTRIES_DATA[formData.country as keyof typeof COUNTRIES_DATA] || {}).map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Area/City</label>
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        disabled={!formData.state}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select your area/city</option>
                        {formData.state && formData.country && COUNTRIES_DATA[formData.country as keyof typeof COUNTRIES_DATA]?.[formData.state as any]?.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold minecraft-text mb-4">Registration Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Your Name:</span>
                      <span className="font-semibold">{formData.teamName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Player Name:</span>
                      <span className="font-semibold">{formData.playerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-semibold">{formData.playerEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gamer Tag:</span>
                      <span className="font-semibold">{formData.playerGamerTag}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Country:</span>
                      <span className="font-semibold">{formData.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">State/Region:</span>
                      <span className="font-semibold">{formData.state}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Area/City:</span>
                      <span className="font-semibold">{formData.area}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="agreeToRules"
                      checked={formData.agreeToRules}
                      onChange={handleChange}
                      className="w-5 h-5 mt-0.5 accent-primary rounded cursor-pointer"
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">
                      I agree to the <span className="font-semibold">Tournament Rules & Regulations</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleChange}
                      className="w-5 h-5 mt-0.5 accent-primary rounded cursor-pointer"
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">
                      I agree to the <span className="font-semibold">Privacy Policy</span> and consent to data
                      processing
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-bold hover:bg-card/80 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
