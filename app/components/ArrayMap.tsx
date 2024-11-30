import ChildComponent from "./ChildComponent"
const ArrayMap = () => {
const Cars = [
    {carImage: "/car1.jpg",carName:"Toyota Corolla", carPrice: "PKR 59.7 - 75.5 lacs", carReview:"626 Reviews" }, 
    {carImage: "/car2.jpg",carName:"Suzuki Alto", carPrice: "PKR 23.3 - 30.5 lacs", carReview:"202 Reviews" },
     {carImage: "/car3.jpg",carName:"Honda City", carPrice: "PKR 46.5 - 58.5 lacs", carReview:"457 Reviews" }, 
     {carImage: "/car4.jpg",carName:"Honda Civic", carPrice: "PKR 86.6 - 99.0 lacs", carReview:"363 Reviews" },
]
return(
    <div>
        <ChildComponent cars = {Cars}/>
    </div>
)
}
export default ArrayMap