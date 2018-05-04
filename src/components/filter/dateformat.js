import moment from "moment";

export default function(value,patter){
    return moment(value).format(patter);
}