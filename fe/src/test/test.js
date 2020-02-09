<div class='container mt-5 mb-5'>
  <form>
    <div class='row mt-5'>
      <div class='col-sm-12'>
        <div class='card'>
          <div class='card-header d-flex align-items-center'>
            <i class='material-icons mr-2'>event</i>
            Event
          </div>
          <div class='card-body'>
            <div class='form-group'>
              <label for='event_name'>Name</label>
              <input class='form-control' id='event_name' type='text'></input>
              <small class='form-text text-muted' id='emailHelp'>
                6 characters minimum.
              </small>
            </div>
            <div class='form-row'>
              <div class='col-sm-6'>
                <div class='form-group'>
                  <label for='event_category'>Category</label>
                  <select class='form-control' id='event_category' type='text'>
                    <option value='music'>Music</option>
                    <option value='food'>Food &amp; Drink</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='nightlife'>Night Life</option>
                    <option value='theatre'>Theatre</option>
                    <option value='arts'>Arts</option>
                    <option value='sports'>Sports</option>
                    <option value='outdoors'>Outdoors</option>
                    <option value='conferences'>Conferences</option>
                    <option value='courses'>Courses</option>
                    <option value='charity'>Charity</option>
                    <option value='other_stuff'>Other</option>
                    <option value='attraction'>Attractions</option>
                    <option value='exhibition'>Exhibitions</option>
                    <option value='talks'>Talks</option>
                  </select>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class='form-group'>
                  <label for='event_tags'>Tags</label>
                  <input class='form-control' id='event_tags' type='text'/>
                  <small class='form-text text-muted' id='emailHelp'>
                    Separated by comma.
                  </small>
                </div>
              </div>
            </div>
            <div class='form-row'>
              <div class='col-sm-6'>
                <div class='form-group'>
                  <label for='event_startdate'>Starts at</label>
                  <input class='form-control' id='event_category' type='text'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class='form-group'>
                  <label for='event_enddate'>Ends at</label>
                  <input class='form-control' id='event_tags' type='text'/>
                </div>
              </div>
            </div>
            <div class='form-group'>
              <button class='btn btn-light d-flex align-items-center'>
                <i class='material-icons mr-2'>add</i>
                Add another date
              </button>
            </div>
            <div class='form-group'>
              <label for='event_description'>Description</label>
              <textarea class='form-control' id='event_description' placeholder='Write something about your event' rows='4'></textarea>
            </div>
            <div class='form-group'>
              <label for='event_image'>Image</label>
              <div id='file_target'>
                <img src='https://digital-public-contact.s3.amazonaws.com/production-thamesvalley/static/img/placeholder.png'/>
              </div>
              <input accept='.jpg, .jpeg, .png' class='form-control' id='event_image' type='file'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='row mt-5'>
      <div class='col-sm-12'>
        <div class='card'>
          <div class='card-header d-flex align-items-center'>
            <i class='material-icons mr-2'>place</i>
            Venue
          </div>
          <div class='card-body'>
            <div class='form-group'>
              <label class='col-form-label' for='venue_geocomplete'>Search</label>
              <input class='form-control' id='venue_geocomplete' placeholder='Search for existing venue or fill out the form manually' type='text'/>
              <small class='form-text text-muted' id='emailHelp'>
                Data provided by Google.
              </small>
            </div>
            <div class='form-group'>
              <label class='col-form-label' for='venue_name'>Name</label>
              <input class='form-control' id='venue_name' name='name' type='text'/>
            </div>
            <div class='form-group'>
              <label class='col-form-label' for='venue_address'>Address</label>
              <input class='form-control' id='venue_address' name='formatted_address' placeholder='1234 Main St' type='text'/>
            </div>
            <div class='form-row'>
              <div class='form-group col-md-6'>
                <label class='col-form-label' for='venue_city'>City</label>
                <input class='form-control' id='venue_city' name='locality' type='text'/>
              </div>
              <div class='form-group col-md-4'>
                <label class='col-form-label' for='venue_state'>State</label>
                <input class='form-control' id='venue_state' name='administrative_area_level_1' type='text'/>
              </div>
              <div class='form-group col-md-2'>
                <label class='col-form-label' for='venue_zip'>Zip</label>
                <input class='form-control' id='venue_zip' name='postal_code' type='text'/>
              </div>
            </div>
            <div class='form-row'>
              <div class='form-group col-md-4'>
                <label for='venue_image'>Image</label>
                <div id='venue_target'>
                  <img src='https://digital-public-contact.s3.amazonaws.com/production-thamesvalley/static/img/placeholder.png'/>
                </div>
              </div>
              <div class='form-group col-md-8'>
                <label>Map</label>
                <div id='venue_map'></div>
              </div>
              <input accept='.jpg, .jpeg, .png' class='form-control' id='venue_image' type='file'/>
            </div>
            <div class='form-row' hidden>
              <div class='form-group col-md-6'>
                <label class='col-form-label' for='venue_lat'>Latitude</label>
                <input class='form-control' id='venue_lat' name='lat' type='text'/>
              </div>
              <div class='form-group col-md-6'>
                <label class='col-form-label' for='venue_lng'>Longitude</label>
                <input class='form-control' id='venue_lng' name='lng' type='text'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='row mt-5'>
      <div class='col-sm-12'>
        <div class='card'>
          <div class='card-header d-flex align-items-center'>
            <i class='material-icons mr-2'>local_play</i>
            Tickets
          </div>
          <div class='card-body'>
            <div class='form-row'>
              <div class='form-group col-md-8'>
                <label for='ticket_name'>Name</label>
                <input class='form-control' id='ticket_name' type='text'/>
              </div>
              <div class='form-group col-md-2'>
                <label for='ticket_quantity'>Quantity</label>
                <input class='form-control' id='ticket_quantity' type='text'/>
              </div>
              <div class='form-group col-md-2'>
                <label for='ticket_price'>Price</label>
                <div class='input-group'>
                  <span class='input-group-addon'>
                    <i class='material-icons'>attach_money</i>
                  </span>
                  <input class='form-control' id='ticket_price' type='text'/>
                </div>
              </div>
            </div>
            <div class='form-group'>
              <label for='ticket_description'>Description</label>
              <textarea class='form-control' id='ticket_description' placeholder='Write something brief about this ticket type' rows='4'></textarea>
              <small class='form-text text-muted' id='emailHelp'>
                Optional
              </small>
            </div>
            <button class='btn btn-light d-flex align-items-center'>
              <i class='material-icons mr-2'>add</i>
              Add another ticket
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class='form-group d-flex justify-content-end mt-3'>
      <button class='btn d-flex align-items-center mr-3'>
        <i class='material-icons mr-2'>close</i>
        Cancel
      </button>
      <button class='btn btn-primary d-flex align-items-center float-right'>
        <i class='material-icons mr-2'>check</i>
        Save event
      </button>
    </div>
  </form>
</div>
