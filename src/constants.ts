import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CLINIC_INFO = {
  name: "Health Plus Clinic",
  doctor: "Dr. Akhilesh Patidar",
  qualifications: "MBBS, MD Medicine(Mumbai), AFIC",
  role: "Physician & Critical Care Consultant",
  hospital: "Consultant at Shalby Hospital",
  location: "Rau, Indore, Madhya Pradesh",
  address: "111, AB Rd, near Baba Kulfi House, Shanti Kamal Kunj, Rau, Indore, Madhya Pradesh 453331",
  phone: "9752940244",
  whatsapp: "919752940244",
  timings: "Opens 6:30 PM (Evening Consultation)",
  rating: "5.0",
  reviewsCount: "56",
  experience: "10+ Years",
  areasServed: ["Rau", "Janjeerwala Chouraha", "Silicon City", "Nearby Areas"],
  logo: "https://res.cloudinary.com/doff350cy/image/upload/v1773248737/health-plus-cliniclogo_mlc33n.jpg"
};

export const HOSPITAL_INFO = {
  name: "Shalby Multispecialty Hospital",
  hours: "11:00 AM – 4:00 PM",
  address: "R.S. Bhandari Marg, Near Janjeerwala Square, Indore, Madhya Pradesh – 452003",
  phone: "+91 731-6677600",
  logo: "https://res.cloudinary.com/doff350cy/image/upload/v1773248748/shalby-hospital-logo_rjjxuw.jpg"
};

export const TRUST_SIGNALS = [
  "Evidence Based Treatment",
  "Patient Centric Care",
  "Emergency & ICU Expertise"
];

export const COMMON_CONDITIONS = [
  "Fever & Infection",
  "Diabetes & BP",
  "Dengue / Typhoid",
  "Respiratory Illness",
  "ICU & Critical Care"
];

export const GALLERY_IMAGES = [
  "https://res.cloudinary.com/doff350cy/image/upload/v1773247628/dr-akhilesh-homepic1_tkyix5.jpg",
  "https://res.cloudinary.com/doff350cy/image/upload/v1773247638/dr-akhilesh-homepic2_gu8okw.jpg",
  "https://res.cloudinary.com/doff350cy/image/upload/v1773248396/dr-akhilesh-homepic3_td9e96.jpg",
  "https://res.cloudinary.com/doff350cy/image/upload/v1773247665/dr-akhilesh-homepic4_kcdvap.jpg"
];

export const HOME_SERVICES = [
  {
    id: "general",
    title: "1. General Physician Consultation",
    description: "Comprehensive evaluation for routine health concerns and common medical conditions.",
    whoNeeds: "Individuals experiencing symptoms such as cough, cold, fatigue, weakness, body aches, digestive disturbances, or any general health concerns.",
    approach: "A thorough clinical consultation including detailed medical history, comprehensive physical examination, and evidence-based diagnostic assessment.",
    outcome: "Accurate diagnosis with a personalized treatment plan aimed at quick recovery and restoration of optimal health.",
    icon: "Stethoscope"
  },
  {
    id: "critical",
    title: "2. Critical Illness Evaluation",
    description: "Expert medical assessment for complex and potentially life-threatening conditions.",
    whoNeeds: "Patients presenting with severe symptoms, rapidly deteriorating health, or those requiring specialized tertiary-level medical evaluation.",
    approach: "Advanced clinical evaluation with in-depth diagnostic analysis and critical care–oriented decision-making to guide urgent and appropriate treatment.",
    outcome: "A structured stabilization strategy and comprehensive advanced management plan.",
    icon: "Activity"
  },
  {
    id: "diabetes",
    title: "3. Diabetes & Metabolic Disorder Management",
    description: "Specialized care for diabetes and metabolic health optimization.",
    whoNeeds: "Patients diagnosed with Type 1 diabetes, Type 2 diabetes, pre-diabetes, or metabolic syndrome, as well as individuals at high risk for metabolic disorders.",
    approach: "Individualized treatment strategies including dietary counseling, lifestyle modification, glucose monitoring, and optimized pharmacological therapy.",
    outcome: "Improved glycemic control, better metabolic balance, and prevention of long-term complications.",
    icon: "Droplets"
  },
  {
    id: "cardiac",
    title: "4. Blood Pressure & Cardiovascular Risk Monitoring",
    description: "Comprehensive management of hypertension and preventive cardiovascular care.",
    whoNeeds: "Individuals diagnosed with hypertension or those with risk factors such as obesity, diabetes, family history of heart disease, or sedentary lifestyle.",
    approach: "Regular blood pressure monitoring, cardiovascular risk assessment, and treatment strategies aligned with current clinical guidelines.",
    outcome: "Effective blood pressure control and reduced risk of cardiovascular complications.",
    icon: "HeartPulse"
  },
  {
    id: "infection",
    title: "5. Fever & Infection Management",
    description: "Accurate diagnosis and effective treatment of infectious diseases.",
    whoNeeds: "Patients experiencing persistent or recurrent fever, suspected viral or bacterial infections, or unexplained systemic symptoms.",
    approach: "Systematic clinical evaluation supported by targeted laboratory investigations to identify the underlying cause of infection.",
    outcome: "Timely treatment leading to resolution of infection and relief from symptoms.",
    icon: "Thermometer"
  },
  {
    id: "chronic",
    title: "6. Long-Term Disease Management",
    description: "Dedicated care for chronic medical conditions requiring continuous monitoring.",
    whoNeeds: "Patients with chronic illnesses such as diabetes, hypertension, thyroid disorders, or other long-term medical conditions requiring periodic follow-up.",
    approach: "Structured follow-up consultations, regular monitoring of disease parameters, and ongoing adjustment of therapy to ensure optimal health outcomes.",
    outcome: "Stable disease control, improved quality of life, and reduced risk of complications.",
    icon: "ClipboardList"
  }
];

export const DETAILED_SERVICES = [
  {
    title: "1. General Medical Consultation",
    description: "Comprehensive evaluation and management of common medical conditions including fever, infections, respiratory illnesses, gastrointestinal disorders, and general health concerns.",
    icon: "Stethoscope"
  },
  {
    title: "2. Critical Care & Emergency Management",
    description: "Expert assessment and stabilization of critically ill patients including sepsis, respiratory failure, shock, and multi-organ dysfunction requiring intensive monitoring and advanced medical intervention.",
    icon: "Activity"
  },
  {
    title: "3. Diabetes Management",
    description: "Diagnosis and long-term management of diabetes mellitus including blood sugar control, lifestyle modification, medication optimization, and prevention of diabetic complications.",
    icon: "Droplets"
  },
  {
    title: "4. Hypertension & Cardiovascular Risk Management",
    description: "Evaluation and treatment of high blood pressure along with preventive strategies for cardiovascular diseases through risk assessment, lifestyle counseling, and medical therapy.",
    icon: "HeartPulse"
  },
  {
    title: "5. Infectious Disease Management",
    description: "Diagnosis and treatment of acute and chronic infections including viral illnesses, bacterial infections, tropical diseases, and prolonged fever of unknown origin.",
    icon: "Thermometer"
  },
  {
    title: "6. Respiratory Disease Management",
    description: "Management of respiratory conditions such as asthma, COPD, pneumonia, bronchitis, and other lung-related illnesses.",
    icon: "Activity"
  },
  {
    title: "7. ICU Consultation & Critical Care Opinion",
    description: "Specialized consultation for patients admitted in ICU including ventilator management, sepsis care, organ support strategies, and multidisciplinary critical care coordination.",
    icon: "ClipboardList"
  },
  {
    title: "8. Preventive Health Check & Lifestyle Counseling",
    description: "Risk assessment and preventive healthcare including screening for lifestyle diseases, weight management, nutrition guidance, and health optimization.",
    icon: "ShieldCheck"
  },
  {
    title: "9. Chronic Disease Management",
    description: "Long-term care for chronic conditions such as thyroid disorders, kidney disease, metabolic syndrome, and other long-standing medical illnesses.",
    icon: "Activity"
  },
  {
    title: "10. Second Opinion for Complex Medical Cases",
    description: "Expert medical opinion for complicated diagnoses, treatment dilemmas, or patients seeking advanced clinical guidance.",
    icon: "ClipboardList"
  },
  {
    title: "11. Pre-operative Medical Evaluation",
    description: "Medical fitness assessment and optimization before surgery to reduce perioperative risk and ensure safe surgical outcomes.",
    icon: "Stethoscope"
  },
  {
    title: "12. Post-Hospitalization & Follow-up Care",
    description: "Comprehensive follow-up care for patients recovering from critical illness, hospitalization, or major medical conditions.",
    icon: "Activity"
  }
];

export const REVIEWS = [
  {
    name: "Patient",
    text: "Nice place and good behaviour.",
    rating: 5
  },
  {
    name: "Patient",
    text: "Proper medication for health condition.",
    rating: 5
  },
  {
    name: "Patient",
    text: "Best advice and experience.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "What conditions are treated?",
    answer: "We treat a wide range of internal medicine conditions including diabetes, hypertension, infectious diseases, and critical medical emergencies."
  },
  {
    question: "Do you manage emergency or critical care cases?",
    answer: "Yes. Dr. Akhilesh Patidar has extensive experience in critical care and emergency medicine, including management of ICU patients, severe infections, respiratory distress, and complex medical conditions requiring urgent evaluation."
  },
  {
    question: "When should I go directly to the hospital instead of the clinic?",
    answer: "Patients with severe symptoms such as chest pain, breathlessness, altered consciousness, persistent high fever, severe weakness, or sudden deterioration should seek immediate hospital evaluation or emergency care."
  },
  {
    question: "Are hospital admissions or ICU consultations available?",
    answer: "Yes. Hospital consultations and inpatient evaluations are available at Shalby Multispecialty Hospital, Indore, including ICU assessment and management for critically ill patients."
  },
  {
    question: "Can I consult for a second opinion for serious illness?",
    answer: "Yes. Patients and families often seek second opinions for complex medical conditions, ICU care decisions, infections, and chronic disease management."
  },
  {
    question: "What should I bring for my consultation?",
    answer: "Please bring previous medical records, prescriptions, investigation reports, discharge summaries, and a list of current medications to help in a thorough evaluation."
  },
  {
    question: "Is follow-up consultation required?",
    answer: "Follow-up visits may be advised depending on the medical condition, treatment response, and investigation results to ensure optimal recovery and monitoring."
  },
  {
    question: "Do I need an appointment?",
    answer: "While walk-ins are accepted during clinic hours (starting 6:30 PM), booking an appointment is recommended to minimize wait times."
  }
];
