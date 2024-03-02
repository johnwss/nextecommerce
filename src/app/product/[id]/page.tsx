import Stripe from "stripe";

type ProductPageProps = {
    params: {
    id: string;
    };
};

async function getProduct(id: string){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-10-16'
      });
      const producto = await stripe.products.retrieve(id);
    return {
        id,
    };
};


export default function ProductPage({params:{id}}:ProductPageProps){
    console.log(id);
    return <div>Produto</div>
}