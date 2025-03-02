const { contactFormTemplate } = require("../utils/customEmailTemplate");
const { sendMailtrapEmail } = require("../utils/sendMailtrapEmail");

// create contact us
const postContactUs = async (req, res) => {
  try {
    const { name, email, phone, address, zip, picture, message } = req.body;

    // Save to database
    const contactUs = new ContactUs({
      name,
      email,
      phone,
      address,
      zip,
      picture,
      message,
    });
    await contactUs.save();

    // Email notification
    try {
      await sendMailtrapEmail(
        process.env.EMAIL_TO || "chaudhuree@gmail.com",
        "New Contact Form Submission",
        contactFormTemplate,
        { name, email, phone, address, zip, picture, message }
      );
      console.log("Contact form email sent successfully");
    } catch (emailError) {
      console.error("Error sending email: ", emailError);
      // Continue with the response even if email fails
    }

    res.status(201).send({ 
      success: true, 
      message: "Contact form submitted successfully",
      data: contactUs,
    });
  } catch (error) {
    console.error("Error in postContactUs:", error);
    res.status(500).send({
      success: false,
      message: "Error submitting contact form",
      error: error.message,
    });
  }
};
