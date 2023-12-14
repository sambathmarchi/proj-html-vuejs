<script>
  export default {
    data() {
        return {
            cards: [
                {
                    path: 'src/assets/img/stock-full-hd-03-480x298.jpg',
                    title: '$0.00',
                    pres: 'Personal Finance: Financial Security Thinking & Principles',
                    lessons: '2 lessons',
                    students: '294 Students'
                },
                {
                    path: 'src/assets/img/course-02-480x298.jpg',
                    title: '$40.00',
                    pres: 'Learning to Write as a Professional Author',
                    lessons: '2 lessons',
                    students: '76 Students'
                },
                {
                    path: 'src/assets/img/stock-full-hd-03-480x298.jpg',
                    title: '$0.00',
                    pres: 'Customer-centric Info-Tech Strategies',
                    lessons: '2 lessons',
                    students: '952 Students'
                },
                {
                    path: 'src/assets/img/stock-full-hd-04-480x298.jpg',
                    title: '$19.00',
                    pres: 'Open Programming Courses for Everyone: Python',
                    lessons: '2 lessons',
                    students: '66 Students'
                },
                {
                    path: 'src/assets/img/stock-full-hd-06-480x298.jpg',
                    title: '$26.00',
                    pres: 'Academic Listening and Note-taking',
                    lessons: '2 lessons',
                    students: '68 Students'
                },
            ]
        }
    }
}
</script>
 
<template>
  <div class="container">
    <div class="textcont">
      <p>JOIN MAXCOACH AT BEST</p>
      <h2>Latest Online Courses</h2>

    </div>
    <section>
        <div v-for="card in cards" class="card-container">
            <img :src="card.path" alt="img">
            <div class="course-info">
                <h4>{{ card.title }}</h4>
                <p>{{ card.pres }}</p>
                <div class="cardfooter">
                  <span class=""><i class="fa-solid fa-file-lines"></i>{{ card.lessons }}</span>
                  <span class=""><i class="fa-regular fa-user"></i>{{ card.students }}</span>
                </div>
            </div>
        </div>
    </section> 
  </div>
  

</template>

<style>



.container{
  width: 70%;
  margin-top: 180px;
  
}

.textcont{
  display: flex;
  flex-direction: column;
}

.cardfooter{
  display: flex;
  margin-top: 20px;
}



section{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
  