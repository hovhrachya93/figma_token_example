import fs from 'fs';

const handler = async (req, res) => {
  console.log('successss');
  try {
    const res = await fetch(
      `https://api.jsonbin.io/v3/b/6418586dc0e7653a058b38ea`,
      {
        method: 'GET',
        headers: {
          'X-Master-Key':
            '$2b$10$LVVG7Go0EM7S4iH5/RafEOB0vUsTjRnKMGLf2TP4NsVRakHpfJmnK',
        },
      }
    );
    const data = await res.json();
    fs.writeFile('./', data, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('successss');
    });
  } catch (err) {
    console.log(err);
  }
};

export default handler;
