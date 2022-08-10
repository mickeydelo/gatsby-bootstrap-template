import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
  <Layout>
    <Seo title="About Gatsby Bootsrap 5 starter" />
    <div className="container  my-5">

      <article class="my-3" id="navs">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Navs</h3>
      </div>

      <div>
        <div class="bd-example">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
              <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque efficitur venenatis. Nulla et sem sapien. In gravida ante eget magna imperdiet, tempor auctor elit auctor. Ut pharetra dignissim mauris nec consequat. Integer vel mi iaculis dolor mollis interdum. Cras tempus dapibus turpis, at dictum leo. Proin interdum neque leo, sed consequat leo hendrerit ut. Nam nec congue eros. Proin quis facilisis arcu. Cras aliquam mi a enim finibus maximus. Nunc justo dolor, mollis vel nunc et, semper dictum mauris. Sed maximus euismod turpis id molestie.</p>

              <p>Vestibulum ornare molestie pharetra. Phasellus lacinia odio varius, consequat risus quis, sollicitudin sem. Aliquam feugiat eros nec ex posuere molestie. Etiam in tellus sem. Ut molestie enim a dolor venenatis malesuada. Integer ac tortor varius, dapibus turpis vitae, vulputate nulla. Sed id nunc eget dolor consequat malesuada. Morbi vulputate luctus diam vitae condimentum. Praesent eu ante urna. Cras gravida malesuada neque, non ultricies mi fringilla dapibus. Morbi mollis mattis dui sed faucibus. Nunc tincidunt purus malesuada mi suscipit, vel volutpat dolor laoreet.</p>

              <p>In elementum erat vitae metus facilisis dapibus. Donec vitae ex congue, fringilla tortor venenatis, scelerisque nibh. Aenean pulvinar tempor libero, eu porta turpis eleifend nec. Aenean mi lectus, euismod vitae sollicitudin eget, bibendum eu magna. Sed porta ornare tellus, in mollis nisi luctus ac. Mauris efficitur odio at vulputate accumsan. Pellentesque sodales in massa sit amet accumsan. Pellentesque quis luctus purus.</p>

              <p>Maecenas eu arcu eu mi volutpat tristique vestibulum quis sem. Integer fringilla finibus risus, et pharetra risus. Nam purus leo, sollicitudin et dui vitae, finibus congue magna. Morbi pretium sit amet metus eget accumsan. Fusce non ultricies leo, vel ornare mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ut nisl non felis vehicula vulputate id sed dolor. Vestibulum lobortis interdum leo ut posuere.</p>

              <p>Maecenas pellentesque tellus molestie massa malesuada mattis. Etiam vitae orci et magna fringilla suscipit. Morbi nisl felis, cursus quis vulputate placerat, consequat faucibus diam. Sed elementum nunc quis dui tincidunt tincidunt. Etiam tempus lorem sed convallis varius. Fusce efficitur et elit ut accumsan. Praesent ultrices justo in sodales dapibus. Aenean vestibulum est magna, at mollis nisl eleifend a. Vivamus consectetur risus eu urna dignissim, in consequat sem sollicitudin. Suspendisse porttitor urna et laoreet malesuada. Sed a tellus lectus. Cras varius tempor purus. Etiam sagittis eu mauris nec mattis. In aliquam malesuada dapibus. Phasellus porta tortor id leo elementum laoreet. Vivamus imperdiet, nunc ac fermentum interdum, eros ante malesuada eros, id viverra nisl est eu eros.</p>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque efficitur venenatis. Nulla et sem sapien. In gravida ante eget magna imperdiet, tempor auctor elit auctor. Ut pharetra dignissim mauris nec consequat. Integer vel mi iaculis dolor mollis interdum. Cras tempus dapibus turpis, at dictum leo. Proin interdum neque leo, sed consequat leo hendrerit ut. Nam nec congue eros. Proin quis facilisis arcu. Cras aliquam mi a enim finibus maximus. Nunc justo dolor, mollis vel nunc et, semper dictum mauris. Sed maximus euismod turpis id molestie.</p>

              <p>Vestibulum ornare molestie pharetra. Phasellus lacinia odio varius, consequat risus quis, sollicitudin sem. Aliquam feugiat eros nec ex posuere molestie. Etiam in tellus sem. Ut molestie enim a dolor venenatis malesuada. Integer ac tortor varius, dapibus turpis vitae, vulputate nulla. Sed id nunc eget dolor consequat malesuada. Morbi vulputate luctus diam vitae condimentum. Praesent eu ante urna. Cras gravida malesuada neque, non ultricies mi fringilla dapibus. Morbi mollis mattis dui sed faucibus. Nunc tincidunt purus malesuada mi suscipit, vel volutpat dolor laoreet.</p>

              <p>In elementum erat vitae metus facilisis dapibus. Donec vitae ex congue, fringilla tortor venenatis, scelerisque nibh. Aenean pulvinar tempor libero, eu porta turpis eleifend nec. Aenean mi lectus, euismod vitae sollicitudin eget, bibendum eu magna. Sed porta ornare tellus, in mollis nisi luctus ac. Mauris efficitur odio at vulputate accumsan. Pellentesque sodales in massa sit amet accumsan. Pellentesque quis luctus purus.</p>
            </div>

            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <StaticImage
                src="../images/gatsby-astronaut.png"
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                loading="eager"
                placeholder="blurred"
              />
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque efficitur venenatis. Nulla et sem sapien. In gravida ante eget magna imperdiet, tempor auctor elit auctor. Ut pharetra dignissim mauris nec consequat. Integer vel mi iaculis dolor mollis interdum. Cras tempus dapibus turpis, at dictum leo. Proin interdum neque leo, sed consequat leo hendrerit ut. Nam nec congue eros. Proin quis facilisis arcu. Cras aliquam mi a enim finibus maximus. Nunc justo dolor, mollis vel nunc et, semper dictum mauris. Sed maximus euismod turpis id molestie.</p>

              <p>Vestibulum ornare molestie pharetra. Phasellus lacinia odio varius, consequat risus quis, sollicitudin sem. Aliquam feugiat eros nec ex posuere molestie. Etiam in tellus sem. Ut molestie enim a dolor venenatis malesuada. Integer ac tortor varius, dapibus turpis vitae, vulputate nulla. Sed id nunc eget dolor consequat malesuada. Morbi vulputate luctus diam vitae condimentum. Praesent eu ante urna. Cras gravida malesuada neque, non ultricies mi fringilla dapibus. Morbi mollis mattis dui sed faucibus. Nunc tincidunt purus malesuada mi suscipit, vel volutpat dolor laoreet.</p>

              <p>In elementum erat vitae metus facilisis dapibus. Donec vitae ex congue, fringilla tortor venenatis, scelerisque nibh. Aenean pulvinar tempor libero, eu porta turpis eleifend nec. Aenean mi lectus, euismod vitae sollicitudin eget, bibendum eu magna. Sed porta ornare tellus, in mollis nisi luctus ac. Mauris efficitur odio at vulputate accumsan. Pellentesque sodales in massa sit amet accumsan. Pellentesque quis luctus purus.</p>

              <p>Maecenas eu arcu eu mi volutpat tristique vestibulum quis sem. Integer fringilla finibus risus, et pharetra risus. Nam purus leo, sollicitudin et dui vitae, finibus congue magna. Morbi pretium sit amet metus eget accumsan. Fusce non ultricies leo, vel ornare mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ut nisl non felis vehicula vulputate id sed dolor. Vestibulum lobortis interdum leo ut posuere.</p>

              <p>Maecenas pellentesque tellus molestie massa malesuada mattis. Etiam vitae orci et magna fringilla suscipit. Morbi nisl felis, cursus quis vulputate placerat, consequat faucibus diam. Sed elementum nunc quis dui tincidunt tincidunt. Etiam tempus lorem sed convallis varius. Fusce efficitur et elit ut accumsan. Praesent ultrices justo in sodales dapibus. Aenean vestibulum est magna, at mollis nisl eleifend a. Vivamus consectetur risus eu urna dignissim, in consequat sem sollicitudin. Suspendisse porttitor urna et laoreet malesuada. Sed a tellus lectus. Cras varius tempor purus. Etiam sagittis eu mauris nec mattis. In aliquam malesuada dapibus. Phasellus porta tortor id leo elementum laoreet. Vivamus imperdiet, nunc ac fermentum interdum, eros ante malesuada eros, id viverra nisl est eu eros.</p>
            </div>
          </div>
        </div>

        <div class="bd-example">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        </div>
      </div>
      </article>
      
    </div>

  </Layout>
)
}

export default AboutPage
