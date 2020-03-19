<header>
  <div class="container">
    <h1>Bootstrap</h1>
    <h3>Accordion</h3>
  </div>
</header>

<nav class="navbar navbar-default no-margin no-border no-radius">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-i">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#home">Home</a>
    </div>
    <div class="collapse navbar-collapse" id="navbar-i">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#one">One</a></li>
        <li><a href="#two">Two</a></li>
        <li><a href="#three">Three</a></li>
      </ul>
    </div>
  </div>
</nav>

<main id="home" class="contents">
  <section id="one" class="i-row i-row-odd ir-white">
    <div class="container">
      <h2 class="section-title">Accordion One</h2>
      <div class="row">
        <div class="col-md-6">
        
          <h3>Default <i class="fa fa-thumbs-o-down"></i> <small>CSS</small></h3>
          <div class="panel-group d-accordion">
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-parent=".d-accordion" href="#aboutus">
                <h4 class="panel-title">About Us <i class="fa fa-chevron-up pull-right"></i></h4>
              </div>
              <div id="aboutus" class="panel-collapse collapse in">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dsignissim. Egestas</p>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-parent=".d-accordion" href="#whoweare">
                <h4 class="panel-title">Who We Are <i class="fa fa-chevron-up pull-right"></i></h4>
              </div>
              <div id="whoweare" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-parent=".d-accordion" href="#contactus">
                <h4 class="panel-title">Contact Us <i class="fa fa-chevron-up pull-right"></i></h4>
              </div>
              <div id="contactus" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
         
          <h3>Fixed <i class="fa fa-thumbs-o-up"></i> <small>jQuery</small></h3>
          <div class="panel-group i-accordion">
            <div class="panel panel-success">
              <div class="panel-heading" data-toggle="collapse" data-parent=".i-accordion" href="#aboutus2">
                <h4 class="panel-title">About Us <i class="fa fa-chevron-up pull-right"></i></h4>
              </div>
              <div id="aboutus2" class="panel-collapse collapse in">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                </div>
              </div>
            </div>
            <div class="panel panel-success">
              <div class="panel-heading" data-toggle="collapse" data-parent=".i-accordion" href="#whoweare2">
                <h4 class="panel-title">Who We Are <i class="fa fa-chevron-down pull-right"></i></h4>
              </div>
              <div id="whoweare2" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                </div>
              </div>
            </div>
            <div class="panel panel-success">
              <div class="panel-heading" data-toggle="collapse" data-parent=".i-accordion" href="#contactus2">
                <h4 class="panel-title">Contact Us <i class="fa fa-chevron-down pull-right"></i></h4>
              </div>
              <div id="contactus2" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="two" class="i-row i-row-even">
    <div class="container">
      <h2 class="section-title">Accordion Two</h2>
      <div class="row">
        <div class="col-md-6">
          <!-- Fixed -->
          <h3>Fixed <i class="fa fa-thumbs-o-up"></i> <small>jQuery</small></h3>
          <div class="panel-group accordion-2a">
            <div class="panel panel-info">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-2a" href="#a2-a01">
                <h4 class="panel-title">About Us <i class="fa fa-minus pull-right"></i></h4>
              </div>
              <div id="a2-a01" class="panel-collapse collapse in">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                  <p>Ricotta danish fontina mozzarella. Boursin stinking bishop roquefort rubber cheese cheese and wine cheese on toast parmesan croque monsieur. Cut the cheese swiss babybel danish fontina stilton halloumi edam queso. Fromage frais squirty cheese cheese slices dolcelatte fromage when the cheese comes out everybody's happy airedale boursin. Cheese and wine when the cheese comes out everybody's happy halloumi.</p>
                  <p>Boursin who moved my cheese emmental. Swiss bavarian bergkase cheesy feet roquefort stilton jarlsberg cheesy feet cottage cheese. Mascarpone cauliflower cheese feta hard cheese smelly cheese ricotta taleggio boursin. Jarlsberg cut the cheese.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-info">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-2a" href="#a2-a02">
                <h4 class="panel-title">Who We Are <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a2-a02" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Jarlsberg croque monsieur say cheese. Stilton cheddar cheese and biscuits pecorino cream cheese cheese triangles rubber cheese jarlsberg. Macaroni cheese cheese strings cheese slices parmesan bavarian bergkase chalk and cheese fondue parmesan. Parmesan macaroni cheese rubber cheese who moved my cheese hard cheese who moved my cheese the big cheese.</p>
                  <p>Cheeseburger rubber cheese macaroni cheese. Stinking bishop say cheese stilton melted cheese cheeseburger cheeseburger blue castello caerphilly. Roquefort cheese strings ricotta cheese strings when the cheese comes out everybody's happy mascarpone queso cheese triangles. Say cheese dolcelatte stinking bishop bocconcini st. agur blue cheese pepper jack.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-info">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-2a" href="#a2-a03">
                <h4 class="panel-title">Contact Us <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a2-a03" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Roquefort fondue queso. Cheeseburger cheese and biscuits cheesecake cheese strings cheddar say cheese mascarpone halloumi. Macaroni cheese feta fromage frais cheese and biscuits cheesecake cauliflower cheese emmental pecorino. Jarlsberg cut the cheese brie who moved my cheese when the cheese comes out everybody's happy monterey jack squirty cheese.</p>
                  <p>The big cheese danish fontina edam. Rubber cheese cauliflower cheese halloumi everyone loves mozzarella cheese slices macaroni cheese cheesecake. Bavarian bergkase squirty cheese cream cheese cow fondue boursin boursin cut the cheese. Cow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <!-- Fixed -->
          <h3>Fixed <i class="fa fa-thumbs-o-up"></i> <small>jQuery</small></h3>
          <div class="panel-group accordion-2b">
            <div class="panel panel-danger">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-2b" href="#a2-b01">
                <h4 class="panel-title">About Us <i class="fa fa-minus pull-right"></i></h4>
              </div>
              <div id="a2-b01" class="panel-collapse collapse in">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                  <p>Ricotta danish fontina mozzarella. Boursin stinking bishop roquefort rubber cheese cheese and wine cheese on toast parmesan croque monsieur. Cut the cheese swiss babybel danish fontina stilton halloumi edam queso. Fromage frais squirty cheese cheese slices dolcelatte fromage when the cheese comes out everybody's happy airedale boursin. Cheese and wine when the cheese comes out everybody's happy halloumi.</p>
                  <p>Boursin who moved my cheese emmental. Swiss bavarian bergkase cheesy feet roquefort stilton jarlsberg cheesy feet cottage cheese. Mascarpone cauliflower cheese feta hard cheese smelly cheese ricotta taleggio boursin. Jarlsberg cut the cheese.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-2b" href="#a2-b02">
                <h4 class="panel-title">Who We Are <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a2-b02" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Jarlsberg croque monsieur say cheese. Stilton cheddar cheese and biscuits pecorino cream cheese cheese triangles rubber cheese jarlsberg. Macaroni cheese cheese strings cheese slices parmesan bavarian bergkase chalk and cheese fondue parmesan. Parmesan macaroni cheese rubber cheese who moved my cheese hard cheese who moved my cheese the big cheese.</p>
                  <p>Cheeseburger rubber cheese macaroni cheese. Stinking bishop say cheese stilton melted cheese cheeseburger cheeseburger blue castello caerphilly. Roquefort cheese strings ricotta cheese strings when the cheese comes out everybody's happy mascarpone queso cheese triangles. Say cheese dolcelatte stinking bishop bocconcini st. agur blue cheese pepper jack.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-2b" href="#a2-b03">
                <h4 class="panel-title">Contact Us <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a2-b03" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Roquefort fondue queso. Cheeseburger cheese and biscuits cheesecake cheese strings cheddar say cheese mascarpone halloumi. Macaroni cheese feta fromage frais cheese and biscuits cheesecake cauliflower cheese emmental pecorino. Jarlsberg cut the cheese brie who moved my cheese when the cheese comes out everybody's happy monterey jack squirty cheese.</p>
                  <p>The big cheese danish fontina edam. Rubber cheese cauliflower cheese halloumi everyone loves mozzarella cheese slices macaroni cheese cheesecake. Bavarian bergkase squirty cheese cream cheese cow fondue boursin boursin cut the cheese. Cow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="three" class="i-row i-row-odd">
    <div class="container">
      <h2 class="section-title">Accordion Three</h2>
      <div class="row">
        <div class="col-md-12">
          <!-- Fixed -->
          <h3>Fixed <i class="fa fa-thumbs-o-up"></i> <small>jQuery</small></h3>
          <div class="panel-group accordion-3">
            <div class="panel panel-info">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-3" href="#a3-a01">
                <h4 class="panel-title">About Us <i class="fa fa-minus pull-right"></i></h4>
              </div>
              <div id="a3-a01" class="panel-collapse collapse in">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                  <p>Ricotta danish fontina mozzarella. Boursin stinking bishop roquefort rubber cheese cheese and wine cheese on toast parmesan croque monsieur. Cut the cheese swiss babybel danish fontina stilton halloumi edam queso. Fromage frais squirty cheese cheese slices dolcelatte fromage when the cheese comes out everybody's happy airedale boursin. Cheese and wine when the cheese comes out everybody's happy halloumi.</p>
                  <p>Boursin who moved my cheese emmental. Swiss bavarian bergkase cheesy feet roquefort stilton jarlsberg cheesy feet cottage cheese. Mascarpone cauliflower cheese feta hard cheese smelly cheese ricotta taleggio boursin. Jarlsberg cut the cheese.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-info">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-3" href="#a3-a02">
                <h4 class="panel-title">Who We Are <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a3-a02" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Jarlsberg croque monsieur say cheese. Stilton cheddar cheese and biscuits pecorino cream cheese cheese triangles rubber cheese jarlsberg. Macaroni cheese cheese strings cheese slices parmesan bavarian bergkase chalk and cheese fondue parmesan. Parmesan macaroni cheese rubber cheese who moved my cheese hard cheese who moved my cheese the big cheese.</p>
                  <p>Cheeseburger rubber cheese macaroni cheese. Stinking bishop say cheese stilton melted cheese cheeseburger cheeseburger blue castello caerphilly. Roquefort cheese strings ricotta cheese strings when the cheese comes out everybody's happy mascarpone queso cheese triangles. Say cheese dolcelatte stinking bishop bocconcini st. agur blue cheese pepper jack.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-info">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-3" href="#a3-a03">
                <h4 class="panel-title">Contact Us <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a3-a03" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Roquefort fondue queso. Cheeseburger cheese and biscuits cheesecake cheese strings cheddar say cheese mascarpone halloumi. Macaroni cheese feta fromage frais cheese and biscuits cheesecake cauliflower cheese emmental pecorino. Jarlsberg cut the cheese brie who moved my cheese when the cheese comes out everybody's happy monterey jack squirty cheese.</p>
                  <p>The big cheese danish fontina edam. Rubber cheese cauliflower cheese halloumi everyone loves mozzarella cheese slices macaroni cheese cheesecake. Bavarian bergkase squirty cheese cream cheese cow fondue boursin boursin cut the cheese. Cow.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-3" href="#a3-a04">
                <h4 class="panel-title">About Us <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a3-a04" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Nec tristique! Odio sit turpis ac sit magna, non. Elementum ultrices tristique, rhoncus lectus, turpis ac, purus magna! Et massa pulvinar ridiculus dignissim. Egestas</p>
                  <p>Ricotta danish fontina mozzarella. Boursin stinking bishop roquefort rubber cheese cheese and wine cheese on toast parmesan croque monsieur. Cut the cheese swiss babybel danish fontina stilton halloumi edam queso. Fromage frais squirty cheese cheese slices dolcelatte fromage when the cheese comes out everybody's happy airedale boursin. Cheese and wine when the cheese comes out everybody's happy halloumi.</p>
                  <p>Boursin who moved my cheese emmental. Swiss bavarian bergkase cheesy feet roquefort stilton jarlsberg cheesy feet cottage cheese. Mascarpone cauliflower cheese feta hard cheese smelly cheese ricotta taleggio boursin. Jarlsberg cut the cheese.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-3" href="#a3-a05">
                <h4 class="panel-title">Who We Are <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a3-a05" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Jarlsberg croque monsieur say cheese. Stilton cheddar cheese and biscuits pecorino cream cheese cheese triangles rubber cheese jarlsberg. Macaroni cheese cheese strings cheese slices parmesan bavarian bergkase chalk and cheese fondue parmesan. Parmesan macaroni cheese rubber cheese who moved my cheese hard cheese who moved my cheese the big cheese.</p>
                  <p>Cheeseburger rubber cheese macaroni cheese. Stinking bishop say cheese stilton melted cheese cheeseburger cheeseburger blue castello caerphilly. Roquefort cheese strings ricotta cheese strings when the cheese comes out everybody's happy mascarpone queso cheese triangles. Say cheese dolcelatte stinking bishop bocconcini st. agur blue cheese pepper jack.</p>
                </div>
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading" data-toggle="collapse" data-parent=".accordion-3" href="#a3-a06">
                <h4 class="panel-title">Contact Us <i class="fa fa-plus pull-right"></i></h4>
              </div>
              <div id="a3-a06" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Roquefort fondue queso. Cheeseburger cheese and biscuits cheesecake cheese strings cheddar say cheese mascarpone halloumi. Macaroni cheese feta fromage frais cheese and biscuits cheesecake cauliflower cheese emmental pecorino. Jarlsberg cut the cheese brie who moved my cheese when the cheese comes out everybody's happy monterey jack squirty cheese.</p>
                  <p>The big cheese danish fontina edam. Rubber cheese cauliflower cheese halloumi everyone loves mozzarella cheese slices macaroni cheese cheesecake. Bavarian bergkase squirty cheese cream cheese cow fondue boursin boursin cut the cheese. Cow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <p class="text-muted no-margin">Powered by Ivan 2015</p>
  </div>
</footer>