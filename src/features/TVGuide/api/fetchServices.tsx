const servicesUrl =
	"https://cdn.skyq.sky.com/recruitment/tvguide/services.json";

const fetchServices = () => fetch(servicesUrl);
export default fetchServices;
