<script>
        // Professional Data with Image URLs
        const professionalData = {
            mentors: [
                {
                    name: "Emily Chen",
                    specialty: "Software Engineering",
                    expertise: ["React", "Node.js", "Full Stack"],
                    qualifications: "Senior Software Engineer at Tech Innovators",
                    sessions: 500,
                    imageUrl: "https://plus.unsplash.com/premium_photo-1661766444310-014137fc422c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVudG9yc3xlbnwwfHwwfHx8MA%3D%3D"
                },
                {
                    name: "Alex Rodriguez",
                    specialty: "Data Science",
                    expertise: ["Python", "Machine Learning", "Data Visualization"],
                    qualifications: "Lead Data Scientist, Kaggle Grandmaster",
                    sessions: 450,
                    imageUrl: "https://t4.ftcdn.net/jpg/04/70/73/69/360_F_470736978_lfeHHrchljCz5lOB5hA82bNpHl8ZekWr.jpg"
                },
                {
                    name: "Michael Zhang",
                    specialty: "Cybersecurity",
                    expertise: ["Network Security", "Ethical Hacking", "Cloud Security"],
                    qualifications: "CISSP Certified, Former Government Security Consultant",
                    sessions: 375,
                    imageUrl: "https://t4.ftcdn.net/jpg/02/77/89/65/360_F_277896574_YJLVw9SOZ4Bxv8zNDZXEPEvj6r22zeKO.jpg"
                },
                {
                    name: "Sarah Thompson",
                    specialty: "Cloud Computing",
                    expertise: ["AWS", "Kubernetes", "Docker", "Cloud Architecture"],
                    qualifications: "AWS Certified Solutions Architect",
                    sessions: 425,
                    imageUrl: "https://img.freepik.com/premium-photo/education-teachers-university-schools-concept-young-smiling-woman-employer-student-glasses_1258-60817.jpg?semt=ais_hybrid"
                },
                {
                    name: "David Kim",
                    specialty: "Mobile App Development",
                    expertise: ["Flutter", "React Native", "iOS Development"],
                    qualifications: "Senior Mobile Developer, App Store Featured Developer",
                    sessions: 400,
                    imageUrl: "https://t4.ftcdn.net/jpg/12/83/88/51/360_F_1283885139_nnNutcrvMkhFD1HqeEuE3jp8T44621c8.jpg"
                },
                {
                    name: "Olivia Patel",
                    specialty: "AI & Machine Learning",
                    expertise: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"],
                    qualifications: "Ph.D. in Artificial Intelligence, Research Scientist",
                    sessions: 350,
                    imageUrl: "https://media.gettyimages.com/id/1289489554/photo/young-indian-female-school-teacher-or-college-professor.jpg?s=612x612&w=0&k=20&c=7RQiM84lpuCfn5FbtSIqqeUSs7DWY7uValJvtwLojbs="
                },
                {
                    name: "Radhika",
                    specialty: "Game Development",
                    expertise: ["Unity", "C#", "Game Design", "3D Modeling"],
                    qualifications: "Senior Game Developer at AAA Gaming Studio",
                    sessions: 300,
                    imageUrl: "https://img.freepik.com/premium-photo/happy-indian-school-female-teacher-standing-proudly_928503-3922.jpg?semt=ais_hybrid"
                },
                {
                    name: "Rachel Gonzalez",
                    specialty: "UX/UI Design",
                    expertise: ["User Research", "Interaction Design", "Figma", "Design Systems"],
                    qualifications: "Design Lead at Top Tech Company",
                    sessions: 425,
                    imageUrl: "https://t3.ftcdn.net/jpg/12/21/83/66/360_F_1221836641_TwJmSVTjlzZ8c2czh3oXAsTVNVcA2Z1A.jpg"
                },
                {
                    name: "Jason Wu",
                    specialty: "Blockchain Technology",
                    expertise: ["Ethereum", "Smart Contracts", "Decentralized Apps", "Solidity"],
                    qualifications: "Blockchain Solutions Architect",
                    sessions: 275,
                    imageUrl: "https://t4.ftcdn.net/jpg/10/48/64/55/360_F_1048645521_IqacLx9wGaPEwuczttENYS86GILWBiPP.jpg"
                },
                {
                    name: "Elena Kuznetsova",
                    specialty: "DevOps Engineering",
                    expertise: ["CI/CD", "Cloud Infrastructure", "Kubernetes", "Automation"],
                    qualifications: "DevOps Lead, Cloud Native Expert",
                    sessions: 350,
                    imageUrl: "https://img.freepik.com/free-photo/beautiful-asian-woman-posing-library_74855-1102.jpg?semt=ais_hybrid"
                }
            ],
            counsellors: [
                {
                    name: "Dr. Sarah Rodriguez",
                    specialty: "Mental Health Counselling",
                    expertise: ["Anxiety", "Depression", "Stress Management"],
                    qualifications: "Clinical Psychologist, Ph.D. in Psychology",
                    sessions: 400,
                    imageUrl: "https://media.gettyimages.com/id/1390886669/photo/homecare-visit-with-a-senior-woman.jpg?s=612x612&w=0&k=20&c=JXJvQCOn6MqqrKjSFk2VSBbxDD-1NbSKFF6r8_2xLcA="
                },
                {
                    name: "Michael Chen",
                    specialty: "Student Life Counselling",
                    expertise: ["Academic Stress", "Career Guidance", "Personal Development"],
                    qualifications: "Educational Psychologist, Career Coach",
                    sessions: 350,
                    imageUrl: "https://media.istockphoto.com/id/1147974068/photo/portrait-of-smiling-mature-male-doctor-with-stethoscope-standing-by-desk-in-office.jpg?s=612x612&w=0&k=20&c=P9kCj89K5oV5AI-yzFS9LAFRjUuc12XmdLP1cr2Nzu8="
                },
                {
                    name: "Dr. Emily Rodriguez",
                    specialty: "Relationship Counselling",
                    expertise: ["Couples Therapy", "Communication Skills", "Family Dynamics"],
                    qualifications: "Licensed Marriage and Family Therapist",
                    sessions: 375,
                    imageUrl: "https://media.gettyimages.com/id/109374813/photo/portrait-of-cheerful-female-doctor.jpg?s=612x612&w=0&k=20&c=yYbQQsP_wWkpWfRSH7Qvs4iEjwTBEB9nhfUXgL4uvII="
                },
                {
                    name: "David Martinez",
                    specialty: "Career Counselling",
                    expertise: ["Job Search Strategies", "Professional Development", "Interview Prep"],
                    qualifications: "Certified Career Development Professional",
                    sessions: 325,
                    imageUrl: "https://t3.ftcdn.net/jpg/02/44/03/14/360_F_244031424_vuoomQH4eR1DD2lY4RcZsXEesy2KGFm1.jpg"
                },
                {
                    name: "Dr. Priya Patel",
                    specialty: "Trauma and Recovery",
                    expertise: ["PTSD", "Emotional Healing", "Resilience Building"],
                    qualifications: "Trauma-Informed Care Specialist",
                    sessions: 300,
                    imageUrl: "https://t4.ftcdn.net/jpg/01/55/46/53/360_F_155465379_KvxUyyDC18zhCu97Me0xIY3JtYAAIrWT.jpg"
                },
                {
                    name: "Lisa Wong",
                    specialty: "Adolescent Mental Health",
                    expertise: ["Teen Anxiety", "Self-Esteem", "Peer Relationships"],
                    qualifications: "Child and Adolescent Counselling Expert",
                    sessions: 275,
                    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                },
                {
                    name: "Dr. James Carter",
                    specialty: "Addiction Counselling",
                    expertise: ["Substance Abuse", "Recovery Support", "Behavioral Addiction"],
                    qualifications: "Certified Addiction Counsellor",
                    sessions: 250,
                    imageUrl: "https://t4.ftcdn.net/jpg/10/36/18/83/360_F_1036188321_YsQ4nJ35yetZaSh5DEYRHiQX7i2VloaQ.jpg"
                },
                {
                    name: "Elena Kovacs",
                    specialty: "Cross-Cultural Counselling",
                    expertise: ["Cultural Adaptation", "Immigration Stress", "Multicultural Support"],
                    qualifications: "International Mental Health Counsellor",
                    sessions: 225,
                    imageUrl: "https://img.freepik.com/free-photo/business-woman-portrait_1303-9013.jpg?semt=ais_hybrid"
                },
                {
                    name: "Dr. Rachel Kim",
                    specialty: "Cognitive Behavioral Therapy",
                    expertise: ["Cognitive Restructuring", "Mindfulness", "Emotional Regulation"],
                    qualifications: "CBT and Mindfulness Specialist",
                    sessions: 350,
                    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/030/390/321/small/asian-doctor-in-a-hospital-generative-ai-photo.jpeg"
                },
                {
                    name: "Mark Thompson",
                    specialty: "Family Dynamics",
                    expertise: ["Family Communication", "Parenting Support", "Family Conflict"],
                    qualifications: "Family Systems Therapist",
                    sessions: 300,
                    imageUrl: "https://img.freepik.com/premium-photo/happy-young-smiling-manager-agent-with-smartphone_274679-2150.jpg?semt=ais_hybrid"
                }
            ]
        };

        // Utility Functions
        function createProfessionalCard(professional, type) {
            const cardColor = type === 'mentor' ? 'orange' : 'green';
            const expertiseHtml = professional.expertise
                .map(skill => `<span class="bg-${cardColor}-100 text-${cardColor}-800 px-2 py-1 rounded-full text-xs mr-2">${skill}</span>`)
                .join('');

            return `
                <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
                    <div class="relative">
                        <div class="bg-${cardColor}-100 h-48 flex items-center justify-center">
                            <img src="${professional.imageUrl}" alt="${professional.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute top-2 right-2 bg-${cardColor}-500 text-white px-2 py-1 rounded-full text-xs">
                            Available
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${professional.name}</h3>
                        <p class="text-${cardColor}-600 font-medium mb-2">${professional.specialty}</p>
                        <div class="flex items-center mb-2">
                            <svg class="w-4 h-4 text-${cardColor}-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 818 0z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-600">${professional.sessions}+ Sessions</span>
                        </div>
                        <div class="mb-4">${expertiseHtml}</div>
                        <button onclick="showBookingModal('${professional.name}', '${professional.specialty}')" class="w-full bg-${cardColor}-500 text-white py-2 rounded-lg hover:bg-${cardColor}-600 transition">
                            Book Session
                        </button>
                    </div>
                </div>
            `;
        }

        // Rest of the JavaScript remains the same as in the previous implementation
        // (renderProfessionals, showBookingModal, event listeners, etc.)
        
        // Render Professional Cards
        function renderProfessionals() {
            const mentorsSection = document.getElementById('mentors-section');
            const counsellorsSection = document.getElementById('counsellors-section');

            mentorsSection.innerHTML = professionalData.mentors
                .map(mentor => createProfessionalCard(mentor, 'mentor'))
                .join('');

            counsellorsSection.innerHTML = professionalData.counsellors
                .map(counsellor => createProfessionalCard(counsellor, 'counsellor'))
                .join('');
        }

        // Modal and Booking Logic (unchanged)
        function showBookingModal(name, specialty) {
            const modal = document.getElementById('booking-modal');
            const titleElement = document.getElementById('modal-title');
            const dateInput = document.getElementById('booking-date');
            const timeSlotsContainer = document.getElementById('time-slots');

            titleElement.textContent = `Book Session with ${name}`;
            modal.classList.remove('hidden');
            modal.classList.add('flex');

            flatpickr(dateInput, {
                minDate: 'today',
                maxDate: new Date().fp_incr(30)
            });

            const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
            timeSlotsContainer.innerHTML = timeSlots.map(slot => `
                <button type="button" class="time-slot px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-orange-500 hover:text-white">
                    ${slot}
                </button>
            `).join('');

            document.querySelectorAll('.time-slot').forEach(slot => {
                slot.addEventListener('click', () => {
                    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('bg-orange-500', 'text-white'));
                    slot.classList.add('bg-orange-500', 'text-white');
                });
            });
        }

        // Event Listeners and Setup
        document.addEventListener('DOMContentLoaded', () => {
            renderProfessionals();
            setupTabListeners();
            setupModalListeners();
        });

        function setupTabListeners() {
            const mentorTab = document.getElementById('mentor-tab');
            const counsellorTab = document.getElementById('counsellor-tab');
            const mentorsSection = document.getElementById('mentors-section');
            const counsellorsSection = document.getElementById('counsellors-section');

            mentorTab.addEventListener('click', () => {
                mentorTab.classList.replace('bg-gray-200', 'bg-orange-500');
                mentorTab.classList.replace('text-gray-700', 'text-white');
                counsellorTab.classList.replace('bg-green-500', 'bg-gray-200');
                counsellorTab.classList.replace('text-white', 'text-gray-700');

                mentorsSection.classList.remove('hidden');
                counsellorsSection.classList.add('hidden');
            });

            counsellorTab.addEventListener('click', () => {
                counsellorTab.classList.replace('bg-gray-200', 'bg-green-500');
                counsellorTab.classList.replace('text-gray-700', 'text-white');
                mentorTab.classList.replace('bg-orange-500', 'bg-gray-200');
                mentorTab.classList.replace('text-white', 'text-gray-700');

                counsellorsSection.classList.remove('hidden');
                mentorsSection.classList.add('hidden');
            });
        }

        function setupModalListeners() {
            document.getElementById('cancel-booking').addEventListener('click', closeModal);
            document.getElementById('close-success-modal').addEventListener('click', closeSuccessModal);
            document.getElementById('booking-form').addEventListener('submit', handleBookingSubmission);
        }

        function closeModal() {
            const modal = document.getElementById('booking-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function closeSuccessModal() {
            const successModal = document.getElementById('success-modal');
            successModal.classList.add('hidden');
            successModal.classList.remove('flex');
        }

        function handleBookingSubmission(e) {
            e.preventDefault();
            
            const dateInput = document.getElementById('booking-date');
            const selectedTimeSlot = document.querySelector('.time-slot.bg-orange-500');
            const modalTitle = document.getElementById('modal-title').textContent;

            if (!dateInput.value) {
                alert('Please select a date');
                return;
            }

            if (!selectedTimeSlot) {
                alert('Please select a time slot');
                return;
            }

            const successModal = document.getElementById('success-modal');
            const bookingDetailsElement = document.getElementById('booking-details');
            
            bookingDetailsElement.innerHTML = `
                You have successfully booked a session with <strong>${modalTitle}</strong><br>
                Date: <strong>${dateInput.value}</strong><br>
                Time: <strong>${selectedTimeSlot.textContent}</strong>
            `;

            document.getElementById('booking-modal').classList.add('hidden');
            document.getElementById('booking-modal').classList.remove('flex');

            successModal.classList.remove('hidden');
            successModal.classList.add('flex');
        }
    </script>
