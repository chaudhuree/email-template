const contactFormTemplate = (data) => {
  // Create image cells for the pictures array
  const createImageCells = (pictures) => {
    if (!Array.isArray(pictures) || pictures.length === 0) return '';
    
    let imageHtml = '';
    pictures.forEach((picture, index) => {
      if (index % 2 === 0) { 
        if (index !== 0) imageHtml += '</tr>';
        imageHtml += '<tr>';
      }
      imageHtml += `
        <td width="50%" style="padding: 5px;">
          <img src="${picture}" alt="Uploaded Image ${index + 1}" style="width: 100%; max-width: 250px; height: auto; border: 1px solid #BE8A38; border-radius: 4px; display: block; margin: 0 auto;">
        </td>
      `;
    });
    
    // Complete the last row if needed
    if (pictures.length % 2 !== 0) {
      imageHtml += '<td width="50%" style="padding: 5px;"></td>';
    }
    imageHtml += '</tr>';
    return imageHtml;
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    @media screen and (max-width: 600px) {
      .main-table {
        width: 100% !important;
        padding: 10px !important;
      }
      .content-cell {
        padding: 15px !important;
      }
      .label-cell {
        width: 100% !important;
        display: block !important;
        padding: 5px 0 !important;
      }
      .value-cell {
        width: 100% !important;
        display: block !important;
        padding: 0 0 10px 0 !important;
      }
      .image-table td {
        display: block !important;
        width: 100% !important;
      }
      .image-table img {
        max-width: 100% !important;
        margin: 0 auto !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #F9F3EB;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
    <tr>
      <td style="padding: 20px 0;">
        <!-- Main Content Table -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" class="main-table" style="border-collapse: collapse; margin: 0 auto; background-color: #ffffff; border: 2px solid #BE8A38; border-radius: 4px;">
          <!-- Header -->
          <tr>
            <td style="padding: 25px 30px; text-align: center; background-color: #BE8A38;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class="content-cell" style="padding: 20px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <!-- Name -->
                <tr>
                  <td class="label-cell" width="30%" style="padding: 10px 0; color: #BE8A38; font-size: 14px; font-weight: bold;">Name:</td>
                  <td class="value-cell" width="70%" style="padding: 10px 0; color: #333333; font-size: 16px;">${data.name}</td>
                </tr>

                <!-- Email -->
                <tr>
                  <td class="label-cell" width="30%" style="padding: 10px 0; color: #BE8A38; font-size: 14px; font-weight: bold;">Email:</td>
                  <td class="value-cell" width="70%" style="padding: 10px 0; color: #333333; font-size: 16px;">${data.email}</td>
                </tr>

                <!-- Phone Number -->
                <tr>
                  <td class="label-cell" width="30%" style="padding: 10px 0; color: #BE8A38; font-size: 14px; font-weight: bold;">Phone Number:</td>
                  <td class="value-cell" width="70%" style="padding: 10px 0; color: #333333; font-size: 16px;">${data.phone}</td>
                </tr>

                <!-- Address -->
                <tr>
                  <td class="label-cell" width="30%" style="padding: 10px 0; color: #BE8A38; font-size: 14px; font-weight: bold;">Address:</td>
                  <td class="value-cell" width="70%" style="padding: 10px 0; color: #333333; font-size: 16px;">${data.address}</td>
                </tr>

                <!-- ZIP Code -->
                <tr>
                  <td class="label-cell" width="30%" style="padding: 10px 0; color: #BE8A38; font-size: 14px; font-weight: bold;">ZIP Code:</td>
                  <td class="value-cell" width="70%" style="padding: 10px 0; color: #333333; font-size: 16px;">${data.zip}</td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td colspan="2" style="padding: 15px 0;">
                    <hr style="border: none; border-top: 1px solid #BE8A38; margin: 0;">
                  </td>
                </tr>

                <!-- Uploaded Images -->
                <tr>
                  <td colspan="2" style="padding: 10px 0;">
                    <p style="margin: 0 0 10px 0; color: #BE8A38; font-size: 14px; font-weight: bold;">Uploaded Images:</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" class="image-table" style="border-collapse: collapse;">
                      ${createImageCells(data.picture)}
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td colspan="2" style="padding: 15px 0;">
                    <hr style="border: none; border-top: 1px solid #BE8A38; margin: 0;">
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td colspan="2" style="padding: 10px 0; color: #BE8A38; font-size: 14px; font-weight: bold;">Message:</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 15px; background-color: #F9F3EB; border: 1px solid #BE8A38; border-radius: 4px; color: #333333; font-size: 16px; line-height: 1.5;">
                    ${data.message}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; text-align: center; background-color: #F9F3EB; border-top: 2px solid #BE8A38;">
              <p style="margin: 0; color: #BE8A38; font-size: 12px;">This is an automated email sent from your contact form.</p>
              <p style="margin: 5px 0 0 0; color: #BE8A38; font-size: 12px;">Please do not reply to this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

module.exports = { contactFormTemplate };
