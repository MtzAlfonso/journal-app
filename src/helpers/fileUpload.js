export const fileUpload = async (file) => {
  const CLOUD_URL = 'https://api.cloudinary.com/v1_1/daqq4i7gw/image/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const res = await fetch(CLOUD_URL, { method: 'POST', body: formData });
    if (res.ok) {
      const cloudRes = await res.json();
      return cloudRes.secure_url;
    } else {
      throw await res.json();
    }
  } catch (error) {
    console.log(error);
  }
};
