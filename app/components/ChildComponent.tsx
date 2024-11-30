import Image from "next/image";
export default function ChildComponent(props: any) {
    console.log(props); 
  
    return (
      <div className="flex flex-col md:flex-row justify-evenly w-full py-4 md:h-72 gap-6 px-6 text-center items-center bg-gray-300">
        {props.cars.map((car: any, index: number) => (
          <div key={index} className="w-full h-60 md:w-4/12 bg-white ">
            <div className="flex justify-center items-center">
            <Image src={car.carImage}  alt={car.carName} width={200} height={200} />
            </div>
            
            <h2 className="text-blue-900 font-bold">{car.carName}</h2>
            <p className="text-green-700">{car.carPrice}</p>
            <p className="text-gray-500">{car.carReview}</p>
          </div>
        ))}
      </div>
    );
  }






