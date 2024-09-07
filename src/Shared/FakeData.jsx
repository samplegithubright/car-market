import {faker} from '@faker-js/faker';


function createRandomeCarList(){
return {
    name:faker.vehicle.vehicle(),
    fuelType:faker.vehicle.fuel(),
    model:faker.vehicle.model(),
    type:faker.vehicle.type(),
    
    image:'https://imgd.aeplcdn.com/370x208/n/cw/ec/136217/x7-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80',
    miles:1000,
    gearType:'Automatic',
    price:faker.finance.amount({min:4000,max:20000}),
};
}
const carList=faker.helpers.multiple(createRandomeCarList,{
    count:7
})
export default{
    carList
}