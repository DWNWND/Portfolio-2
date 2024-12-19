import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const contactSchema = yup.object({
  name: yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  subject: yup.string().min(3, "Subject must be at least 3 characters").required("Subject is required"),
  message: yup.string().min(20, "Message must be at least 20 characters").required("Message is required"),
});

interface RegisterFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
  "bot-field"?: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    const formData = new FormData();

    // Add the form-name for Netlify
    formData.append("form-name", "contact");

    // Append the rest of the form data, checking for undefined values
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof RegisterFormInputs];
      if (value !== undefined) {
        formData.append(key, value); // Safely append only defined values
      }
    });

    // Honeypot check (if you have a honeypot field)
    if (data["bot-field"]) {
      console.log("Spam submission detected");
      return;
    }

    // Convert FormData to URLSearchParams
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });

    // Debug: log the encoded body
    console.log(new URLSearchParams(formObject).toString());

    // Submit the form
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formObject).toString(),
    })
      .then(() => alert("Form successfully submitted"))
      .catch((error) => alert("Something went wrong: " + error));
  };

  return (
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit(onSubmit)} className="backdropClass flex flex-col gap-6 w-full md:my-20 p-8 md:px-12 bg-white bg-opacity-95 border rounded-lg shadow-md">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div className="m-auto md:my-6">
        <h2 className="font-libre-baskerville text-3xl md:text-4xl text-center">Get in touch!</h2>
        <p className="italic mt-8 text-center">Fill out this form, and I will get in touch with you as soon as possible.</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="userName" className="label">
          Name
        </label>
        <input type="text" id="name" placeholder="Jane Doe" className="input" {...register("name")} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input type="email" id="email" placeholder="jane.doe@gmail.com" className="input" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <input type="text" id="subject" placeholder="Inquiry about business landing page" className="input" {...register("subject")} />
        {errors.subject && <p className="error">{errors.subject.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="label">
          Message
        </label>
        <textarea id="message" placeholder="What do you need help with and/or how do you envision your project?" className="input textarea" {...register("message")} />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <div className="relative group self-center mb-4 md:my-10">
        <button type="submit" className="tracking-wider block font-bold text-center hover:scale-105 bg-white border border-black bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-lg md:text-xl text-black hover:text-opacity-90 px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600">
          send inquiry
        </button>
        <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
      </div>
    </form>
  );
}
