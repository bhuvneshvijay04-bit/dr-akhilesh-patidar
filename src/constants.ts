import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CLINIC_INFO = {
  name: "Health Plus Clinic",
  doctor: "Dr. Akhilesh Patidar",
  qualifications: "MBBS, MD Medicine (Mumbai), AFIC",
  role: "Physician & Critical Care Consultant",
  hospital: "Consultant at Shalby Hospital",
  location: "Rau, Indore, Madhya Pradesh",
  address: "111, AB Rd, near Baba Kulfi House, Shanti Kamal Kunj, Rau, Indore, Madhya Pradesh 453331",
  phone: "9752940244",
  whatsapp: "919752940244",
  timings: "Opens 6:30 PM (Evening Consultation)",
  rating: "5.0",
  reviewsCount: "56",
  visitDuration: "45 Minutes – 4 Hours",
  areasServed: ["Rau", "Janjeerwala Chouraha", "Nearby Areas"]
};

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
    question: "When should I seek consultation?",
    answer: "You should seek consultation for persistent symptoms, complex medical issues, or when expert critical care evaluation is needed."
  },
  {
    question: "Do I need an appointment?",
    answer: "While walk-ins are accepted during clinic hours (starting 6:30 PM), booking an appointment is recommended to minimize wait times."
  },
  {
    question: "Are chronic illnesses managed here?",
    answer: "Yes, we specialize in the long-term management of chronic conditions like diabetes, thyroid disorders, and chronic respiratory issues."
  }
];
