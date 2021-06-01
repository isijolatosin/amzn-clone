// ********  BACK END LOGIC  **********
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  // console.log(items);
  // console.log(email);

  // This illustrates taking each item over mapping and returns them in the format STRIPE understands. The STRIPE_FORMAT_TYPE here is named transformedItems...
  const transformedItems = items.map((item) => ({
    description: item.data.description,
    quantity: 1,
    price_data: {
      currency: 'cad',
      unit_amount: item.data.price * 100,
      product_data: {
        name: item.data.title,
        images: [item.data.image],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1IuYt4KBOKEWjfJooUxwFMmw'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA'],
    },

    // line items are all the items we are going to be having on that order which we already have as transformedItems...
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.data.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
