// GET /products/:product_id

// Product Information
// Returns all product level information for a specified product id.

// Parameter   Type     Description
// product_id   integer   Required ID of the Product requested

// Response -> Status: 200 OK

/* eslint-disable */
const productInfo = {
  id: 42370,
  campus: 'hr-lax',
  name: 'Heir Force Ones',
  slogan: 'A sneaker dynasty',
  description:
    "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  category: 'Kicks',
  default_price: '99.00',
  created_at: '2021-08-13T14:39:39.968Z',
  updated_at: '2021-08-13T14:39:39.968Z',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Mid-Sole',
      value: 'ControlSupport Arch Bridge',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
};

export default productInfo;
