export default (await import('vue')).defineComponent({
components: {
AppHeader,
AppJumbo,
AppMain,
AppNumbers,
AppVideo,
AppCarousel1,
},
data() {
return {
countersNum: [
{
targetNumber: "1926",
text: "Finished Sessions",
duration: 3000,
startNumber: 0
},
{
targetNumber: "3092+",
text: "enrolled learners",
duration: 3000,
startNumber: 0
},
{
targetNumber: "200",
text: "online instructor",
duration: 3000,
startNumber: 0
},
{
targetNumber: "100%",
text: "satisfaction rate",
duration: 3000,
startNumber: 0
},
],
};
}
});
