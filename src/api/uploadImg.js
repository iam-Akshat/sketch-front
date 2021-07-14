const uploadImg = async (imgBlob) => {
  const myFile = new File([imgBlob], 'image.png', {
    type: imgBlob.type,
  });

  const formData = new FormData();
  formData.append('image', myFile);

  const data = await fetch('http://localhost:3001/convert', {
    method: 'POST',
    body: formData,
  });
  const blob = await data.blob();
  return blob;
};

export default uploadImg;
