<template>
  <TheHeader title="Home" />

  <div class="featured section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="left-image">
            <img src="/images/featured.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="section-heading">
            <h6>| Featured</h6>
            <h2>Best Appartment &amp; Sea view</h2>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  Best useful links ?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business.
                  TemplateMo provides you the
                  best free CSS templates
                  in the world. Please tell your friends about it.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How does this work ?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor
                  incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Why is Villa Agency the best ?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor
                  incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
        <TableInfo />
      </div>
    </div>
  </div>

  <div class="video section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h6>| Video View</h6>
            <h2>Get Closer View & Different Feeling</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="video-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="video-frame">
            <img src="/images/video-frame.jpg" alt="" />
            <a href="https://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Facts />

  <div class="section best-deal">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="section-heading">
            <h6>| Best Deal</h6>
            <h2>Find Your Best Deal Right Now!</h2>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="tabs-content">
            <div class="row">
              <div class="nav-wrapper">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" :class="{ 'active': selected == 0 }" type="button" role="tab"
                      aria-controls="appartment" aria-selected="true" @click="selected = 0">
                      Appartment
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" :class="{ 'active': selected == 1 }" type="button" role="tab"
                      aria-controls="villa" aria-selected="false" @click="selected = 1">
                      Villa House
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" :class="{ 'active': selected == 2 }" type="button" role="tab"
                      aria-controls="penthouse" aria-selected="false" @click="selected = 2">
                      Penthouse
                    </button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade" :class="{ 'active show': selected == 0 }">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="info-table">
                        <ul>
                          <li>Total Flat Space <span>185 m2</span></li>
                          <li>Floor number <span>26th</span></li>
                          <li>Number of rooms <span>4</span></li>
                          <li>Parking Available <span>Yes</span></li>
                          <li>Payment Process <span>Bank</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <img src="/images/deal-01.jpg" alt="" />
                    </div>
                    <div class="col-lg-3">
                      <h4>Extra Info About Property</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut
                        labore et dolore magna aliqua quised ipsum suspendisse. When you need free CSS
                        templates, you can simply type TemplateMo in any search engine website. In addition, you can
                        type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
                      </p>
                      <div class="icon-button">
                        <RouterLink :to="{ name: 'schedule' }"><i class="fa fa-calendar"></i> Schedule a visit
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" :class="{ 'active show': selected == 1 }">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="info-table">
                        <ul>
                          <li>Total Flat Space <span>250 m2</span></li>
                          <li>Floor number <span>12th</span></li>
                          <li>Number of rooms <span>5</span></li>
                          <li>Parking Available <span>Yes</span></li>
                          <li>Payment Process <span>Bank</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <img src="/images/deal-02.jpg" alt="" />
                    </div>
                    <div class="col-lg-3">
                      <h4>Detail Info About Villa</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut
                        labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog
                        twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella
                        venmo after messenger poutine next level humblebrag swag franzen.
                      </p>
                      <div class="icon-button">
                        <RouterLink :to="{ name: 'schedule' }"><i class="fa fa-calendar"></i> Schedule a visit
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" :class="{ 'active show': selected == 2 }">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="info-table">
                        <ul>
                          <li>Total Flat Space <span>320 m2</span></li>
                          <li>Floor number <span>34th</span></li>
                          <li>Number of rooms <span>6</span></li>
                          <li>Parking Available <span>Yes</span></li>
                          <li>Payment Process <span>Bank</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <img src="/images/deal-03.jpg" alt="" />
                    </div>
                    <div class="col-lg-3">
                      <h4>Extra Info About Penthouse</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut
                        labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog
                        twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella
                        venmo after messenger poutine next level humblebrag swag franzen.
                      </p>

                      <div class="icon-button">
                        <RouterLink :to="{ name: 'schedule' }"><i class="fa fa-calendar"></i> Schedule a visit
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Facts from '@/components/Facts.vue';
import TheHeader from '../components/theHeader.vue';
import TableInfo from '@/components/TableInfo.vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    TheHeader,
    Facts,
    TableInfo
  },

  data() {
    return {
      selected: 0
    }
  },

};
</script>
