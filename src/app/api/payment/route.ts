import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15'
})

export async function POST(request: Request) {
  const userSession = await getServerSession();
  const req = await request.json();

  const { totalPrice, name, description, coverImage, tripId, startDate, endDate, guests } = req.body

  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/',
    metadata: {
      tripId,
      startDate,
      endDate,
      guests,
      userId: (userSession?.user as any)?.id,
      totalPrice,
    },
    line_items: [
      {
        price_data: {
          currency: "brl",
          unit_amount: totalPrice * 100,
          product_data: {
            name,
            description,
            images: [coverImage],
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment'
  })

  return new NextResponse(JSON.stringify({ sessionId: session.id }), { status: 200 });
}
