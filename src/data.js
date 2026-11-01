export const P=[
{id:'loanx',n:'LoanX',cat:'AI/ML + Full Stack Development',tech:['Python','XGBoost','FastAPI','React'],url:'https://l-oan-x-ozv4.vercel.app',
d:'An AI-powered loan prediction platform that estimates loan approval probability using machine learning.',
prob:'Loan approval depends on many applicant attributes at once, and a person checking them by hand cannot easily see how likely an approval is.',
sol:'A trained XGBoost model scores an application and returns an approval probability. A FastAPI service exposes the model, and a React interface lets a user enter details and read the result.',
feat:['Approval probability from an ML model','React interface for entering application details','FastAPI service between interface and model','96.84% model accuracy and 0.9896 ROC-AUC on the evaluation dataset'],
imp:['Machine learning workflow: data preprocessing, XGBoost training, model evaluation.','The trained model is served through FastAPI endpoints.','The React frontend calls the API and shows the prediction.'],
arch:['React UI','FastAPI','XGBoost model'],
ch:[['Judging model quality','Used ROC-AUC, which measures how well the model separates approvals from rejections, rather than relying on accuracy alone.'],['Connecting ML to a product','Wrapped the model in an API so the interface stays separate from the Python model code.']],
learn:['Evaluation metrics shape how far a model can be trusted.','A model becomes useful once it sits behind a clear API.']},
{id:'shubh-gpt',n:'Shubh GPT',cat:'Generative AI + Full Stack',tech:['React','Node.js','Gemini API','Authentication','Razorpay'],url:'https://shubh-gpt-jade.vercel.app',
d:'An AI-powered chatbot featuring authentication and premium subscription functionality.',
prob:'A chatbot that anyone can use freely has no way to know who its users are or to offer a paid tier.',
sol:'A chat interface backed by the Gemini API, with user authentication and a premium subscription paid through Razorpay.',
feat:['Chat experience powered by the Gemini API','User authentication','Premium subscription with Razorpay payments'],
imp:['React chat interface for sending prompts and reading replies.','Node.js backend that talks to the Gemini API.','Authentication gates access; Razorpay handles the premium payment flow.'],
arch:['React chat','Node.js API','Gemini API'],
ch:[['Combining AI with payments','Kept the chat, login and subscription concerns in separate parts of the backend.'],['Protecting API access','Routed model calls through the server so keys never reach the browser.']],
learn:['LLM integration is mostly product plumbing around one API call.','Payments and auth need as much care as the AI feature.']},
{id:'bondchat',n:'BondChat',cat:'Full Stack + Real-Time Communication',tech:['MERN Stack','WebRTC','Real-Time Communication'],url:'https://bond-chat.vercel.app',
d:'A real-time messaging and video calling application.',
prob:'People want to message and talk face to face from one place, without switching between tools.',
sol:'A MERN application with real-time messaging and WebRTC-based video calling.',
feat:['Real-time messaging','Video calling using WebRTC','MERN full-stack architecture'],
imp:['React frontend for conversations and calls.','Node.js and Express backend with MongoDB for data.','WebRTC carries the video call between participants.'],
arch:['React client','Node / Express + MongoDB','WebRTC peers'],
ch:[['Real-time state','Messages and call state must stay in sync between users, which shaped how the client and server communicate.'],['Peer connections','Video calls need a signalling step before WebRTC can connect two users.']],
learn:['Real-time apps need different thinking from request and response apps.','WebRTC separates signalling from media.']}];
export const SK={'Frontend':'React.js Next.js JavaScript HTML5 CSS3 Tailwind\u00A0CSS Bootstrap','Backend':'Node.js Express.js REST\u00A0APIs Authentication JWT Middleware','Database':'MongoDB Mongoose MySQL','Programming':'Java Python C SQL','AI / Machine Learning':'Scikit-learn XGBoost NumPy Pandas Data\u00A0Preprocessing Model\u00A0Evaluation','Deep Learning':'PyTorch ANN CNN\u00A0fundamentals','Generative AI':'Gemini\u00A0API LLM\u00A0Integration AI-powered\u00A0applications','Tools':'Git GitHub Postman Vercel'};
export const GH='https://github.com/Shubhamtiwari9509';
export const LI='https://linkedin.com/in/shubham-tiwari-28b39a32b/';
export const RES='https://drive.google.com/file/d/1z3mTWjL-Y8VzwABXSDO3WcfX5o7lEmtP/view?usp=sharing';
export const EM='shubhamtiwari9508@gmail.com';
