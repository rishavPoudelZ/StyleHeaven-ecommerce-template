export default function FAQ() {
  return (
    <div className="flex flex-col items-center p-5" data-theme="lofi">
      <h1 className="text-3xl p-5">FAQ</h1>
      <div className="join join-vertical lg:w-[50%]">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4"/>
          <div className="collapse-title text-xl font-medium">
            1. How do I place an order?
          </div>
          <div className="collapse-content">
            <p>
              To place an order, simply browse through our products, select the
              items you wish to purchase, and add them to your cart. Once you&apos;re
              ready, click on the cart icon and proceed to checkout. Fill in
              your shipping and payment information, and confirm your order.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            2. What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>
              We accept a variety of payment methods, including Visa,
              MasterCard, American Express, PayPal, and Stripe. All transactions
              are secured for your safety.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            3. How can I track my order?
          </div>
          <div className="collapse-content">
            <p>
              Once your order has been shipped, you will receive a confirmation
              email with a tracking number. You can use this number to track
              your package through the shipping provider&apos;s website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            4. What is your return policy?
          </div>
          <div className="collapse-content">
            <p>
              We offer a 30-day return policy for most items. If you’re not
              satisfied with your purchase, you can return it within 30 days for
              a full refund or exchange. Please ensure the items are in their
              original condition.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            5. How long will it take to receive my order?
          </div>
          <div className="collapse-content">
            <p>
              Shipping times vary depending on your location and the shipping
              method selected. Standard shipping usually takes 5-7 business
              days, while express options can take 2-3 business days.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            6. Do you offer international shipping?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer international shipping to a variety of countries.
              Shipping rates and times will vary based on the destination.
              Please check our shipping policy for more details.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            7. How can I cancel or modify my order?
          </div>
          <div className="collapse-content">
            <p>
              If you need to cancel or make changes to your order, please
              contact our customer service team as soon as possible. We can only
              make changes if the order hasn’t been processed yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
