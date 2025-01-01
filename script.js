let compare_button = document.querySelector(".compare-button");
let first_profile_name = document.querySelector(".first-user");
let second_profile_name = document.querySelector(".second-user");
let compare_section = document.querySelector('.compare-main');


function compare_id(first_person , second_person){
  console.log(first_person);

  compare_section.innerHTML = `
  <!-- first section which will contain the image and other details  -->
      <div class="pictures-profile-details flex gap-8 mt-5 shadow-xl">
        <!-- The first ID details -->
        <div class="first-user-data w-[50%]">
          <div
            class="image-name-email-details bg-blue-600 py-5 pl-4 rounded-t-xl flex gap-3"
          >
            <div class="image1">
              <img
                src="${first_person.avatar_url}"
                class="w-28 h-28 rounded-full object-center border-blue-500 border-4"
              />
            </div>
            <div class="name-email self-center">
              <div class="name inline text-white text-2xl font-bold">
                ${first_person.name}
              </div>
              <div class="web-link text-white">${first_person.company}</div>
            </div>
          </div>
          <div class="about-section bg-white py-5 px-5 text-gray-700">
            <div class="about">
              Full-stack developer passionate about React, TypeScript, and open
              source
            </div>
            <div class="followers-repos flex mt-5 px-4 gap-5">
              <!-- Followers Section -->
              <div
                class="followers-section bg-[#F9FAFB] w-full flex flex-col items-center justify-center py-4 rounded-lg"
              >
                <div class="icon-numbers flex items-center space-x-2">
                  <span class="material-symbols-outlined text-blue-700 text-xl">
                    groups
                  </span>
                  <span class="text-blue-700 text-lg font-semibold">890</span>
                </div>
                <div class="followers-heading text-sm font-medium">
                  Followers
                </div>
              </div>

              <!-- Repositories Section -->
              <div
                class="repos-section bg-[#F9FAFB] w-full flex flex-col items-center justify-center py-4 rounded-lg"
              >
                <div class="icon-numbers flex items-center space-x-2">
                  <span class="material-symbols-outlined text-blue-700 text-xl">
                    inventory_2
                  </span>
                  <span class="text-blue-700 text-lg font-semibold">300</span>
                </div>
                <div class="repos-heading text-gray-700 text-sm font-medium">
                  Repositories
                </div>
              </div>
            </div>
            <div class="other-details flex flex-col gap-4 mt-5">
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-blue-700">
                  location_on
                </span>
                <div class="location-1">San Francisco, CA</div>
              </div>
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-blue-700">
                  perm_contact_calendar
                </span>
                <div class="contact-1">@awesome-tech</div>
              </div>
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-blue-700">
                  link
                </span>
                <div class="portfolio-1">techdev.blog</div>
              </div>
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-blue-700">
                  calendar_month
                </span>
                <div class="join-date-1">Joined March 15, 2018</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Second ID data  -->
        <div class="second-user-data w-[50%]">
          <div class="blue-part bg-blue-600 py-5 pl-4 rounded-t-xl flex gap-3">
            <div class="image2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
                class="w-28 h-28 rounded-full object-center border-blue-500 border-4"
              />
            </div>
            <div class="name-email self-center">
              <div class="name inline text-white text-2xl font-bold">
                Alex Rivera
              </div>
              <div class="web-link text-white">@codemaster</div>
            </div>
          </div>
          <div class="about-section bg-white py-5 px-5 text-gray-700">
            <div class="about">
              Full-stack developer passionate about React, TypeScript, and open
              source
            </div>
            <div class="followers-repos flex mt-5 px-4 gap-5">
              <!-- Followers Section -->
              <div
                class="followers-section bg-[#F9FAFB] w-full flex flex-col items-center justify-center py-4 rounded-lg"
              >
                <div class="icon-numbers flex items-center space-x-2">
                  <span class="material-symbols-outlined text-blue-700 text-xl">
                    groups
                  </span>
                  <span class="text-blue-700 text-lg font-semibold">890</span>
                </div>
                <div class="followers-heading text-sm font-medium">
                  Followers
                </div>
              </div>

              <!-- Repositories Section -->
              <div
                class="repos-section bg-[#F9FAFB] w-full flex flex-col items-center justify-center py-4 rounded-lg"
              >
                <div class="icon-numbers flex items-center space-x-2">
                  <span class="material-symbols-outlined text-blue-700 text-xl">
                    inventory_2
                  </span>
                  <span class="text-blue-700 text-lg font-semibold">300</span>
                </div>
                <div class="repos-heading text-gray-700 text-sm font-medium">
                  Repositories
                </div>
              </div>
            </div>
            <div class="other-details flex flex-col gap-4 mt-5">
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-blue-700">
                  location_on
                </span>
                <div class="location-1">San Francisco, CA</div>
              </div>
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-blue-700">
                  perm_contact_calendar
                </span>
                <div class="contact-1">@awesome-tech</div>
              </div>
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-blue-700">
                  link
                </span>
                <div class="portfolio-1">techdev.blog</div>
              </div>
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-blue-700">
                  calendar_month
                </span>
                <div class="join-date-1">Joined March 15, 2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Second Section of the comparison which will contain the statistics data about both people  -->
      <div
        class="stats-comparison bg-white mt-9 py-6 rounded-xl px-4 text-gray-600 text-2xl shadow-2xl"
      >
        <div class="icon-heading flex items-center gap-1">
          <span class="material-symbols-outlined text-yellow-600 text-4xl">
            emoji_events
          </span>
          <h2 class="font-bold text-gray-700">Stats Comparison</h2>
        </div>
        <div class="stats flex gap-4 mt-5">
          <div
            class="star bg-[#F9FAFB] w-full flex flex-col justify-center items-center text-sm font-semibold gap-4 py-8"
          >
            <span class="material-symbols-outlined"> star </span>
            <div>Total Stars</div>
            <div class="star-details gap-7 flex">
              <span class="star-1"> 100 </span>
              <span>VS</span>
              <span class="star-2"> 200 </span>
            </div>
          </div>
          <div
            class="forks bg-[#F9FAFB] w-full flex flex-col justify-center items-center text-sm font-semibold gap-4"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m17.4142 11.4142-.5303-.5303zm1.3358-3.4142c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75zm-12 0c0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75zm-.16421 3.4142-.53033.5303zm6.16421.5858c0-.4142-.3358-.75-.75-.75s-.75.3358-.75.75zm-1.5 4c0 .4142.3358.75.75.75s.75-.3358.75-.75zm-1.25-3.25h4v-1.5h-4zm4 0c.9216 0 1.6883.0016 2.2945-.0799.6278-.0844 1.1946-.2701 1.65-.7256l-1.0606-1.0606c-.1303.1303-.3278.2375-.7893.2996-.483.0649-1.1306.0665-2.0946.0665zm3.25-4.75c0 .96401-.0016 1.61157-.0665 2.0946-.0621.4615-.1693.659-.2996.7893l1.0606 1.0606c.4555-.4554.6412-1.0222.7256-1.65.0815-.60624.0799-1.37289.0799-2.2945zm-12 0c0 .92161-.00159 1.68826.07991 2.2945.08441.6278.27008 1.1946.72555 1.65l1.06066-1.0606c-.13032-.1303-.23754-.3278-.29958-.7893-.06495-.48303-.06654-1.13059-.06654-2.0946zm4.75 3.25c-.96401 0-1.61157-.0016-2.09461-.0665-.46146-.0621-.65896-.1693-.78927-.2996l-1.06066 1.0606c.45547.4555 1.02227.6412 1.65006.7256.60622.0815 1.37287.0799 2.29448.0799zm1.25.75v4h1.5v-4z"
                fill="#141b34"
              />
              <g stroke="#141b34" stroke-width="1.5">
                <circle cx="6" cy="6" r="2" />
                <circle cx="12" cy="18" r="2" />
                <circle cx="18" cy="6" r="2" />
              </g>
            </svg>
            <div>Total Forks</div>
            <div class="star-details gap-7 flex">
              <span class="star-1"> 100 </span>
              <span>VS</span>
              <span class="star-2"> 200 </span>
            </div>
          </div>
          <div
            class="followers bg-[#F9FAFB] w-full flex flex-col justify-center items-center text-sm font-semibold gap-4"
          >
            <span class="material-symbols-outlined text-xl"> groups </span>
            <div>Total Followers</div>
            <div class="star-details gap-7 flex">
              <span class="star-1"> 100 </span>
              <span>VS</span>
              <span class="star-2"> 200 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg">
        <div class="flex items-center space-x-2 my-3">
          <span class="material-symbols-outlined text-blue-700 text-xl">
            code
          </span>
          <h2 class="text-xl font-bold">Language Distribution</h2>
        </div>        
        <div class="overflow-x-auto">
          <table
            class="table-auto w-full border-collapse border border-gray-200"
          >
            <thead>
              <tr>
                <th class="px-4 py-2 text-left text-gray-700 border-b">
                  Language
                </th>
                <th class="px-4 py-2 text-center text-gray-700 border-b">
                  Profile 1
                </th>
                <th class="px-4 py-2 text-center text-gray-700 border-b">
                  Profile 2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="cpp px-4 py-2 text-gray-600 border-b">C++</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="go px-4 py-2 text-gray-600 border-b">Go</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="js px-4 py-2 text-gray-600 border-b">JavaScript</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="python px-4 py-2 text-gray-600 border-b">Python</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="rust px-4 py-2 text-gray-600 border-b">Rust</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="ts px-4 py-2 text-gray-600 border-b">TypeScript</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="java px-4 py-2 text-gray-600 border-b">Java</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="ruby px-4 py-2 text-gray-600 border-b">Ruby</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="kotlin px-4 py-2 text-gray-600 border-b">Kotlin</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="swift px-4 py-2 text-gray-600 border-b">Swift</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="html px-4 py-2 text-gray-600 border-b">HTML</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
              <tr>
                <td class="css px-4 py-2 text-gray-600 border-b">CSS</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
                <td class="px-4 py-2 text-center text-gray-600 border-b">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  `;

};

// making function to fetch the data
async function fetching_data() {

  let fetch_data1 = await fetch(
    `https://api.github.com/users/${first_profile_name.value}`
  ).then((response) => response.json());

  let fetch_data2 = await fetch(
    `https://api.github.com/users/${second_profile_name.value}`
  ).then((response) => response.json());

  console.log(fetch_data1);
  console.log(fetch_data2);
  
  compare_id(fetch_data1 , fetch_data2);
}

// handling the fetching the result

// handing the button click event on compare profile
compare_button.addEventListener("click", fetching_data);

