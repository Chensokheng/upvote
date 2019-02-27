

// // const submissions = [{
// //     id: 1,
// //     title: 'Yellow Pail',
// //     description: 'On-demand sand castle construction and expertise.',
// //     url: '#',
// //     vote: 16,
// //     avatar: 'img/pf1.jpeg',
// //     submissionImage: 'img/bg1.jpg',
// // }
// ];
let images = ['img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpeg', 'img/bg4.jpg']
let bgs = ['img/pf1.jpeg', 'img/pf2.jpeg', 'img/pf3.jpeg', 'img/pf4.jpeg']


const submissionComponent = {
    template:
        `<div style='display:flex; width:100%'>
        <figure class="media-left">
                    <img v-bind:src="submission.submissionImage" alt="" class="image is-64x64">
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>
                                <a :href="submission.url" class="has-text-info">{{ submission.title}}</a>
                                <span class="tag is-small">#{{submission.id}}</span>
                            </strong>
                            <br>
                            {{ submission.description}}
                            <br>
                            <small class='is-size-7'>
                                Submitted by:
                                <img v-bind:src="submission.avatar" alt="" class="image is-24x24">
                            </small>
                        </p>
                    </div>
                </div>

                <div class="media-right">
                    <span class="icon is-small">
                        <i class="fas fa-chevron-up" @click='UpVote(submission.id)'></i>
                        <strong class="has-text-info">{{submission.vote}}</strong>
                    </span>
                </div>
                <div class="media-right">
                    <span class="icon is-small " @click='deleteSubmission(index)'>
                        <i class="fas fa-trash-alt has-text-danger"></i>
                    </span>
                </div>
     </div>`
    ,
};
let app = new Vue({
    el: '#app',
    data: {
        name: '',
        description: '',
        check: false,
        submissions: [],
        id: 0,
    },
    methods: {
        getUserInput() {
            this.check = true;
            let submissionData = {
                id: ++this.id,
                title: this.name,
                description: this.description,
                url: '#',
                vote: Math.floor(Math.random() * 20),
                avatar: bgs[Math.floor(Math.random() * 4)],
                submissionImage: images[Math.floor(Math.random() * 4)],
            };
            this.submissions.push(submissionData);
        },
        UpVote(id) {
            const submissons = this.submissions.find(submissons => submissons.id === id);
            submissons.vote++;
        },
        deleteSubmission(index) {
            this.submissions.splice(index, 1);
        }
    },
    computed: {
        sortSubmission() {
            return this.submissions.sort((x, y) => {
                return -(x.vote - y.vote);
            })
        }
    }


});