# Nav

## Examples

```html
<template>
  <div>
    <tc-nav brand="Travelcart">
      <template slot="middle-nav">
        <div>
          <a href="#">Home</a>
          <a href="#">Tours</a>
          <a href="#">Hotel</a>
          <a href="#">Flight</a>
          <a href="#">Cruise</a>
          <a href="#">Extra</a>
        </div>
      </template>
      <template slot="right-nav">
        <div>
          <a href="#">Manage Booking</a>
          <a href="#">Login</a>
          <a href="#"><tc-icon type="shopping-cart" size="18"></tc-icon></a>
        </div>
      </template>
    </tc-nav>
    <div class="content">
      <div style="background-image: url('https://image.shutterstock.com/z/stock-photo-world-landmarks-photo-collage-on-vintage-sepia-textured-background-travel-tourism-and-study-663326908.jpg'); background-size: cover; background-repeat: no-repeat;     background-position: center; height: 320px;"></div>
      <tc-row>
        <tc-col span="lg-9">
          <tc-card>
            <div slot="header">
              <tc-icon type="map-pin"></tc-icon> Your Trip
            </div>
            <div>
              <div>
                <div>Trip 1</div>
                <div>Blue Mountains Nature and Wildlife Day Tour</div>
              </div>
              <div>
                <tc-icon type="user"></tc-icon> Traveller details
                <hr>
                <div>
                  <div>Traveller 1(Adult)</div>
                  <tc-row>
                    <tc-col span="lg-6">
                      <label>First Name</label>
                      <tc-input placeholder="First Name"></tc-input>
                    </tc-col>
                    <tc-col span="lg-6">
                      <label>Last Name</label>
                      <tc-input placeholder="Last Name"></tc-input>
                    </tc-col>
                    <tc-col span="lg-6">
                      <label>Email</label>
                      <tc-input placeholder="Email"></tc-input>
                    </tc-col>
                    <tc-col span="lg-6">
                      <label>Contact Phone</label>
                      <tc-input placeholder="Contact Phone"></tc-input>
                    </tc-col>
                  </tc-row>
                </div>
                <div>
                  <tc-icon type="message-square"></tc-icon> Contact Information <tc-checkbox name="same_as_traveller" value="1">Same as traveller</tc-checkbox>
                  <hr>
                  <tc-row>
                    <tc-col span="lg-6">
                      <label>First Name</label>
                      <tc-input placeholder="First Name"></tc-input>
                    </tc-col>
                    <tc-col span="lg-6">
                      <label>Last Name</label>
                      <tc-input placeholder="Last Name"></tc-input>
                    </tc-col>
                    <tc-col span="lg-6">
                      <label>Email</label>
                      <tc-input placeholder="Email"></tc-input>
                    </tc-col>
                    <tc-col span="lg-6">
                      <label>Contact Phone</label>
                      <tc-input placeholder="Contact Phone"></tc-input>
                    </tc-col>
                  </tc-row>
                </div>
                <div>
                  <tc-icon type="menu"></tc-icon> Special Request
                  <hr>
                  <tc-textarea></tc-textarea>
                </div>
              </div>
            </div>
          </tc-card>
          <tc-card>
            <div slot="header">
              <tc-icon type="credit-card"></tc-icon> Payment Method
            </div>
            <div>
              <tc-input-group>
                <tc-input placeholder="Have a promo code?"></tc-input>
                <tc-button>APPLY</tc-button>
              </tc-input-group>
              <hr>
              <div>
                <div>
                  <tc-radio name="payment_method" value="1" v-model="payment_method">Pay with Paypal</tc-radio>
                </div>
                <div>
                  <tc-radio name="payment_method" value="2" v-model="payment_method">Pay with Credit Card</tc-radio>
                </div>
              </div>
            </div>
          </tc-card>
        </tc-col>
        <tc-col span="lg-3">
          <tc-card>
            <div slot="header">Review Order Details</div>
            <div>
              <tc-label is-space-between>
                <div slot="left-content">Trip 1</div>
                <div slot="right-content">$565.00</div>
              </tc-label>
              <tc-label is-space-betweem>
                <div slot="title">Blue Mountains Nature and Wildlife Day Tour</div>
                <div slot="left-content"></div>
              </tc-label>
              <div></div>
              <div>Departure date: 19, Nov 2018</div>
              <div>Travellers: 2 Adults, 1 Child</div>
              <div>Pick up: 78-86 Harbour St, Haymarket 8:30am</div>
              <div>Options: Lunch</div>
              <div>
                <tc-button :aria-expanded="expanded" aria-controls="collapse" @click="toggle" block>{{ expanded ? 'Hide cost breakdown' : 'Show cost breakdown' }}</tc-button>
              </div>
              <tc-collapse id="collapse" :expanded="expanded">
                <div>
                  <label><b>Departure date</b></label>
                  <div>
                    <div class="d-flex justify-content-space-between">
                      <span>Departure date surcharge</span>
                      <span>+$30.00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label><b>Traveller</b></label>
                  <div>
                    <div class="d-flex justify-content-space-between">
                      <span>Adult x 2</span>
                      <span>$320.00</span>
                    </div>
                    <div class="d-flex justify-content-space-between">
                      <span>Child x 1</span>
                      <span>$125.00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label><b>Pick up</b></label>
                  <div>
                    <div class="d-flex justify-content-space-between">
                      <span>Pick up surcharge</span>
                      <span>+$30.00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label><b>Options</b></label>
                  <div>
                    <div class="d-flex justify-content-space-between">
                      <span>Lunch fee</span>
                      <span>$60.00</span>
                    </div>
                  </div>
                </div>
              </tc-collapse>
            </div>
            <div slot="footer">
              <div class="d-flex justify-content-space-between">
                <span>Sub Total:</span>
                <span>$565.00</span>
              </div>
              <div class="d-flex justify-content-space-between">
                <span>Discount:</span>
                <span>-$20.00</span>
              </div>
              <div class="d-flex justify-content-space-between">
                <span>Credit card fee:</span>
                <span>$10.00</span>
              </div>
              <div class="d-flex justify-content-space-between">
                <span>Total: </span>
                <span>$575.00</span>
              </div>
            </div>
          </tc-card>
        </tc-col>
      </tc-row>
    </div>
    <footer class="footer">
      <tc-row>
        <tc-col span="4">Contact Us!</tc-col>
        <tc-col span="4">Suite 203 Level 2 Manning Buildin Pitt Street Sydney NSW 2000</tc-col>
        <tc-col span="4">
          <div>02 9281 8888</div>
          <div>agens@nfrjysholidays.com</div>
        </tc-col>
      </tc-row>
      <tc-row>
        <tc-col span="3">
          <div>About this site</div>
          <div>Home</div>
          <div>Our Story</div>
          <div>Contact us</div>
        </tc-col>
        <tc-col span="3">
          <div>About your company</div>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
          <div>Help Center</div>
        </tc-col>
        <tc-col span="3">
          <div>Support</div>
          <div>Frequently Asked Questions</div>
          <div>Emergency Assistance</div>
        </tc-col>
        <tc-col span="3">
          <div>
            <label>Subscribe Now</label>
            <tc-input placeholder="Enter Email" icon="search"></tc-input>
          </div>
        </tc-col>
      </tc-row>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payment_method: '1',
      expanded: false
    };
  },
  methods: {
    toggle: function() {
      this.expanded = !this.expanded;
    }
  }
}
</script>
```