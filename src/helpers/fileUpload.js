export const fileUpload = async (file) => {
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const res = await fetch(process.env.REACT_APP_CLOUDINARY, {
      method: 'POST',
      body: formData,
    });
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
