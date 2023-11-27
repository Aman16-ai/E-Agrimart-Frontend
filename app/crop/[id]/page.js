import { getProductById } from "@/service/Products";

export default async function Page({params}) {
  const product = await getProductById(params.id)
  return (
    <div className="w-screen h-full flex justify-center items-center bg-[#FCFCFD] overflow-y-scroll">
      <div className="w-[80%] h-full flex-col mt-11">
        <div className="w-full h-auto flex justify-between items-center">
          <p className="text-xl text-black font-semibold">
          Premium Organic Potatoes - Straight from Our Farm to Your Table!
          </p>
          <div className="w-auto h-auto flex justify-center items-center">
            <div className="w-auot h-auto flex flex-col">
              <p>Bids</p>
              <h3 className="text-2xl text-black font-bold flex justify-center items-center">
                {product.total_bids}{" "}
                <div className="w-[5px] h-[5px] bg-black rounded-full ml-2"></div>
              </h3>
            </div>

            <div className="w-auot h-auto flex flex-col ml-2">
              <p>Average Bid</p>
              <h3 className="text-2xl text-black font-bold">₹{product.averageBidPrice?.toLocaleString("en-In")}</h3>
            </div>
          </div>
        </div>
        <hr className="w-full h-[1px] mb-8 mt-4" />
        <div className="w-full h-full flex">
          <div className="w-[70%] h-full bg-white border-2">
            <div className="w-[96%] flex flex-col m-4">
              <img
                src={product.crop_img}
                alt=""
              />
              <div className="w-full h-auto flex justify-between mt-3">
                <h4 className="text-xl text-black font-bold">
                  Perposal Details
                </h4>
                <div>
                  <h4 className="text-base">Base Price : <span className="font-bold text-lg">₹{product.price?.toLocaleString("en-In")}</span></h4>
                  <h4 className="text-base">Quantity : <span className="font-bold text-lg">{product.quantity?.toLocaleString("en-In")}Kg</span></h4>
                </div>
              </div>
              <p className="mt-2">🌿 Certified Organic:
Our potatoes are cultivated using sustainable and organic farming practices, free from synthetic pesticides and chemicals. We prioritize the health of both you and the environment, ensuring that every bite is pure, natural, and wholesome.</p>
            </div>
          </div>
          <div className="w-[30%] h-[500px] bg-white ml-4 border-2"></div>
        </div>
      </div>
    </div>
  );
}
