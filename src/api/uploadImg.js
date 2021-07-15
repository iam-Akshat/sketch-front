import constants from '../config/constants';

const uploadImg = async (imgBlob) => {
  const myFile = new File([imgBlob], 'image.png', {
    type: imgBlob.type,
  });
  const formData = new FormData();
  formData.append('image', myFile);

  const data = await fetch(`${constants.BACKEND_URL}/convert`, {
    method: 'POST',
    body: formData,
  });
  const blob = await data.blob();
  return blob;
};

export default uploadImg;
