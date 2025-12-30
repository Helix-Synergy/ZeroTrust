import React, { useState, useEffect } from "react";
import axios from "axios";
import { banner_style } from "../Styles/styles";

const AbstractSubmission = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    state: "",
    country: "",
    university: "",
    email: "",
    affiliation: "",
    linkedin: "",
    twitter: "",
    abstractTitle: "",
    abstract: null,
    interestedIn: "",
    websiteDomain: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setForm((prevForm) => ({
        ...prevForm,
        websiteDomain: window.location.hostname,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setForm({ ...form, [name]: type === "file" ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (key === "abstract" && form[key]) {
          formData.append(key, form[key]);
        } else if (key !== "abstract") {
          formData.append(key, form[key]);
        }
      });

      await axios.post(
        "https://backend-code-6vqy.onrender.com/abstract-submission",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      setStatus({
        type: "success",
        message: "Abstract submitted successfully!",
      });

      setForm({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        state: "",
        country: "",
        university: "",
        email: "",
        affiliation: "",
        linkedin: "",
        twitter: "",
        abstractTitle: "",
        abstract: null,
        interestedIn: "",
        websiteDomain: form.websiteDomain,
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          error.message ||
          "Submission failed. Please try again.",
      });
    }
    setLoading(false);
  };

const presentationOptions = [
  "Future of AI & Security",
  "Cybersecurity",
  "Zero-Trust Focused",
  "Aerospace",
  "Threat Detection & Response",
  "Data Protection",
  "AI Forensics",
  "Defense Technology",
  "Risk Management",
  "Intelligence & Innovation",
  "AI Encryption",
  "Digital Forensics",
  "API Security",
  "Future & Innovation",
  "AI Monitoring",
  "Network Detection",
  "Cognitive Defense",
  "Zero-Trust Cloud",
  "Cyber Resilience",
  "AI Radar",
];





  return (
    <div className="w-[90%] mx-auto p-4">
      <div
        className={`${banner_style} w-full mx-auto abstract-banner`}
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/side-view-people-studying-classroom_23-2150312812.jpg?semt=ais_hybrid&w=740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-black-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          {/* Abstract Submission */}
        </h1>
      </div>

      <h2 className="text-2xl font-bold mb-4">Abstract Submission</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {status.message && (
          <div
            className={`w-full p-4 rounded-lg text-white text-center ${
              status.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="border p-2 rounded"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="border p-2 rounded"
          />
          <input
            name="mobileNumber"
            value={form.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="border p-2 rounded"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            required
            className="border p-2 rounded"
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="border p-2 rounded"
          />
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            required
            className="border p-2 rounded"
          />
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            required
            className="border p-2 rounded"
          />
          <input
            name="university"
            value={form.university}
            onChange={handleChange}
            placeholder="University / Industry"
            required
            className="border p-2 rounded"
          />
          <input
            name="affiliation"
            value={form.affiliation}
            onChange={handleChange}
            placeholder="Affiliation"
            required
            className="border p-2 rounded"
          />
          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn"
            className="border p-2 rounded"
          />
          <input
            name="twitter"
            value={form.twitter}
            onChange={handleChange}
            placeholder="Twitter"
            className="border p-2 rounded"
          />
        </div>

        <select
          name="interestedIn"
          value={form.interestedIn}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Presentation Track</option>
          {presentationOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <input
          name="abstractTitle"
          value={form.abstractTitle}
          onChange={handleChange}
          placeholder="Abstract Title"
          required
          className="w-full border p-2 rounded"
        />

        <div className="w-full">
          <label
            htmlFor="abstract"
            className="cursor-pointer px-4 py-2 bg-gray-100 text-one-700 rounded border border-gray-300 hover:bg-one-200 transition"
          >
            Upload only PDF
          </label>
          <input
            id="abstract"
            type="file"
            name="abstract"
            accept=".pdf"
            onChange={handleChange}
            required
            className="hidden"
          />

          {form.abstract && (
            <p className="mt-2 text-sm text-gray-600">
              Selected File: <strong>{form.abstract.name}</strong>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-one text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Submit Abstract"}
        </button>

        <button className="bg-one ml-2 px-4 py-2 rounded">
          <a href="" download className="text-white">
            Download Demo Abstract
          </a>
        </button>
      </form>
    </div>
  );
};

export default AbstractSubmission;
