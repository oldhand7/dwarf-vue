<template>
  <div>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="../assets/img/logo.png" alt="Dwarf Space Force" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#services">Story</a></li>
                    <li class="nav-item"><a class="nav-link" href="#roadmap">Roadmap</a></li>
                    <li class="nav-item"><a class="nav-link" href="#collection">Dwarf Force</a></li>
                    <li class="nav-item"><a class="nav-link" href="#post-drop">Post Drop</a></li>
                    <li class="nav-item"><a class="nav-link" href="#faq">Faq</a></li>
                    <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                </ul>
            </div>

            <a class="ml-5 btn btn-primary btn-xl text-uppercase bow btn-radius prim-bg sec btn-connect" @click="connect()" v-html="account ? '..'+account.substring(account.length - 4) : 'Connect'"></a>
        </div>
    </nav>

    <div class="btn-mobile-connect">
        <a href="#portfolioModal1" data-bs-toggle="modal"><img src="../assets/img/wallet-connect-btn.svg"></a>
    </div>


    <!-- Start: Hero -->
    <header class="masthead">
        <div class="container">
            <a class="ml-5 btn btn-success btn-xl text-uppercase bow btn-radius succ-bg btn-connect" href="#connectAndMint" v-html="'MINT NOW'"></a>
            <!-- <div class="masthead-subheading">They Need Your Help!</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div> -->
            <!-- <div class="masthead-help"></div> -->
            <!-- <img src="../assets/img/help-arrow.png"> -->
            
        </div>
    </header>

    <div class="hero-btn-wrapper">
        <a v-if="!soldOut" class="btn btn-primary mx-auto btn-xl text-uppercase btn-radius prim-bg sec bow" target="_blank" href="https://discord.gg/qQWWsXxsq4">Join US</a>
        <a v-else class="btn btn-primary mx-auto btn-xl text-uppercase btn-radius prim-bg sec bow" href="javascript:;">Opensea</a>
        <a v-if="soldOut" class="link-btn mx-auto">We're sold out!</a>
    </div>
    <!-- End: Hero -->
    <!-- Start: Services-->
    <section class="page-section" id="services">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading sec">DWARF SPACE FORCE 1st Edition</h2>
            </div>
            <div class="row text-center">
                <div class="col-md-10 mx-auto">
                    <img src="../assets/img/dwarf.png" class="story-image w-50" alt="dwarf"/>
                    <p class="story-text"><span class="story-bigger-text">L</span>ocated in the endless space that is the Metaverse, you can find 10,000 of these tough as nails, fiercely loyal brothers-in-arms storming around on the ETHEREUM blockchain.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- End: Services-->

    <!-- Start: Intro -->
    <section class="page-section" id="intro">
        <div class="container">
            <div class="how-section1">
                <div class="row">
                    <div class="col-md-6 how-img">
                        <img src="../assets/img/one-hand-up.jpg" class="rounded-circle img-fluid" alt="dwarf one hand up"/>
                    </div>
                    <div class="col-md-6">
                        <h4 class="sec bow">Spec</h4>

                        <p class="story-text"><span class="story-bigger-text">A</span>ll 10 000 DWARF SPACE FORCE are unique and have their own temper. We have achieved this by making over 220 separate attributes that when combined produce magnificent looking Dwarfs which all possess their own character.</p>

                        <p class="story-text"><span class="story-bigger-text">W</span>e wanted to add some ruggeredness to the NFT space and took inspiration from our love of
                            the most loyal, strong, fearless and committed characters in all of fantasy.</p>

                        <p class="story-text"><span class="story-bigger-text">B</span>esides the stunning artwork, our SPACE FORCE members will get to enjoy lots of fun activities to grow the SPACE FORCE community.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h4 class="sec bow">WHY WOULD I BUY A DWARF SPACE FORCE?</h4>
                            <h4 class="subheading prim bow">When it comes to NFTs there are a few things you want to keep in mind.</h4>
                            <p class="story-text"><span class="story-bigger-text">One.</span> Is the art good? This is a piece of art. It is hand drawn by an artist who may one day
                                become very famous. We work with young aspiring artists and in the future you may be holding
                                a very rare piece of their early work. That will be worth a lot!</p>

                            <p class="story-text"><span class="story-bigger-text">Two.</span> What is the community doing? At SPACE FORCE the DWARFS are our first venture.
                                There are many more to come. Currently we have six full time artists working on projects. By
                                being involved in a community that is in the NFT business, you increase your chances of finding
                                good projects.</p>

                            <p class="story-text"><span class="story-bigger-text">Three.</span> What is the Road Map for the community? Are they thinking ahead? Are they going to share with the community some of the money? Are they planning ways to increase the use of the NFTs? Look below to see our Road Map and see why joining the Space Force is a great idea!</p>
                    </div>
                    <div class="col-md-6 how-img">
                        <img src="../assets/img/rifle-hands.jpg" class="rounded-circle img-fluid" alt="dwarf rifle hands"/>
                    </div>
                </div>
                <div class="row" id="connectAndMint">
                    <div class="col-md-4">
                            <h4 class="prim bow">Fair Distribution</h4>
                            <p class="story-text">Dwarf Space Force Edition NFT costs {{ nftPrice() }}. There are no price tiers; Dwarf Space Force membership costs the same for everyone.</p>
                    </div>

                    <div class="col-md-8 d-flex justify-content-end" v-if="soldOut">
                        <div class="dwarf-buy-form countdown-wrapper">
                            <div class="form-header">
                                We're sold out!
                            </div>

                            <div id="countdown" class="syotimer">
                                <a class="btn btn-success mx-auto btn-xl text-uppercase btn-radius" href="javascript:;">Check Collections</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8 d-flex justify-content-end" v-if="!preSale && !publicSale && !soldOut && time > 0">
                        <div class="dwarf-buy-form countdown-wrapper">
                            <div class="form-header">
                                LAUNCH IN
                            </div>

                            <div id="countdown" class="syotimer" v-if="time">
                              <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }" @end="saleStarts">
                                <div class="syotimer__head">
                                </div>
                                <div class="syotimer__body">
                                  <div class="syotimer-cell syotimer-cell_type_day">
                                    <div class="syotimer-cell__value" style="opacity: 1;">{{ addZero(days) }}</div>
                                    <div class="syotimer-cell__unit">days</div>
                                  </div>
                                  <div class="syotimer-cell syotimer-cell_type_hour">
                                    <div class="syotimer-cell__value" style="opacity: 1;">{{ addZero(hours) }}</div>
                                    <div class="syotimer-cell__unit">hours</div>
                                  </div>
                                  <div class="syotimer-cell syotimer-cell_type_minute">
                                    <div class="syotimer-cell__value" style="opacity: 1;">{{ addZero(minutes) }}</div>
                                    <div class="syotimer-cell__unit">minutes</div>
                                  </div>
                                  <div class="syotimer-cell syotimer-cell_type_second">
                                    <div class="syotimer-cell__value" style="opacity: 1;">{{ addZero(seconds) }}</div>
                                    <div class="syotimer-cell__unit">seconds</div>
                                  </div>
                                </div>
                                <div class="syotimer__footer"></div>
                              </vue-countdown>
                            </div>
                        </div>
                    </div>
                    <!-- Start: Form -->
                    <div class="col-md-8 d-flex justify-content-end" v-if="!soldOut">
                        <div class="dwarf-buy-form">
                            <div class="text-center">
                                <b>Make sure you have signed with your <a class="text-dark" href="javascript:;" @click="connect()">MetaMask Wallet</a></b>
                            </div>

                            <div class="d-flex justify-content-between nft-row-wrapper">
                                <div class="nft-label">ETH BALANCE</div>
                                <div class="nft-balance" v-html="balance + ' ETH'"></div>
                            </div>

                            <div class="d-flex justify-content-between align-items-center nft-row-wrapper">
                                <div class="nft-label">AMOUNT</div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="decrease-counter" :class="mintAmount <= 1 ? 'disabled-content' : ''" @click="decrease()">–</div>
                                    <div class="amount">{{ mintAmount }}</div>
                                    <div class="increase-counter" @click="increase()" :class="mintAmount >= maxMinting ? 'disabled-content' : ''">+</div>
                                </div>
                                <div class="nft-max-button" :class="!maxMinting ? 'disabled-content' : ''" @click="maxMinting ? mintAmount = maxMinting : ''">MAX</div>
                            </div>

                            <div class="d-flex justify-content-between nft-row-wrapper">
                                <div class="nft-label">TOTAL AMOUNT</div>
                                <div class="nft-balance" v-html="totalCost()"></div>
                            </div>

                            <div class="d-flex justify-content-center">
                                <button v-if="!minting" @click="mint()" :disabled="!preSale && !publicSale" class="nft-buy-now">
                                    MINT NOW
                                </button>
                                <button v-else class="nft-buy-now">
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    MINTING....
                                </button>

                            </div>
                        </div>
                    </div>
                    <!-- End: Form -->
                </div>
            </div>
    </div>
    </section>
    <!-- End: Intro -->

    <!-- Start: Roadmap -->
    <section class="page-section" id="roadmap">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase text-white">ROADMAP</h2>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h2 class="roadmap-heading">1000</h2>
                </div>
                <div class="col-md-6 my-auto">
                    <span class="roadmap-subheading">1000 DWARF SPACE FORCE</span>
                    <span class="roadmap-paragraph">10% - 1 ETH giveaway to one NFT owner between NFT # 1 and 1000.</span>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 my-auto">
                    <span class="roadmap-subheading">2500 DWARF SPACE FORCE</span>
                    <span class="roadmap-paragraph">25% - 1 ETH giveaway to one NFT owner between NFT # 1 and 2500.</span>
                </div>
                <div class="col-md-6">
                    <h2 class="roadmap-heading">2500</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <h2 class="roadmap-heading">5000</h2>
                </div>
                <div class="col-md-6 my-auto">
                    <span class="roadmap-subheading">5000 DWARF SPACE FORCE</span>
                    <span class="roadmap-paragraph">50% - 1 ETH giveaway to one NFT owner between NFT # 1 and 5000.</span>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 my-auto">
                    <span class="roadmap-subheading">7500 DWARF SPACE FORCE</span>
                    <span class="roadmap-paragraph">75% - 1 ETH giveaway to one NFT owner between NFT # 1 and 7500.</span>
                </div>
                <div class="col-md-6">
                    <h2 class="roadmap-heading">7500</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <h2 class="roadmap-heading">10000</h2>
                </div>
                <div class="col-md-6 my-auto">
                    <span class="roadmap-subheading">10000 DWARF SPACE FORCE (SOLD OUT)</span>
                    <span class="roadmap-paragraph">100% - 1 ETH giveaway to one NFT owner between NFT # 1 and 10000.</span>
                </div>
            </div>
        </div>
    </section>
    <!-- End: Roadmap -->

    <!-- Start: Collecton -->
    <section class="page-section bg-light" id="collection">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">SNEAK PEEKS</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 mb-4">
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="javascript:void(0);">
                            <img class="img-fluid" src="../assets/img/portfolio/1.jpg" alt="dwarf image 1" />
                        </a>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 mb-4">
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="javascript:void(0);">
                            <img class="img-fluid" src="../assets/img/portfolio/2.jpg" alt="dwarf image 2" />
                        </a>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 mb-4">
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="javascript:void(0);">
                            <img class="img-fluid" src="../assets/img/portfolio/3.jpg" alt="dwarf image 3" />
                        </a>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="javascript:void(0);">
                            <img class="img-fluid" src="../assets/img/portfolio/4.jpg" alt="dwarf image 4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End: Collection-->

    <!-- Start: Post Drop -->
    <section class="page-section" id="post-drop">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">POST DROP</h2>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image"><span>1</span></div>
                    <div class="timeline-panel">
                        <div class="timeline-body"><p class="story-text">After sellout we will buy the floor with $50000 and all nft's purchased will be used for giveaways and advertising promotions.</p></div>
                    </div>
                </li>

                <li class="timeline-inverted">
                    <div class="timeline-image"><span>2</span></div>
                    <div class="timeline-panel">
                        <div class="timeline-body"><p class="story-text">Community Wallet - 1% of all secondary sales goes to community wallet for prizes and activities.</p></div>
                    </div>
                </li>

                <li>
                    <div class="timeline-image"><span>3</span></div>
                    <div class="timeline-panel">
                        <div class="timeline-body"><p class="story-text">Roughly 8 weeks after the sellout each Dwarf spaceforce owner will be able to MINT a female dwarf for just $40 USD +gas. 30% of all these sales go back into the community wallet to be used for prizes, giveaways and purchases the community might want!</p></div>
                    </div>
                </li>
                
                <li class="timeline-inverted">
                    <div class="timeline-image"><span>4</span></div>
                    <div class="timeline-panel">
                        <div class="timeline-body"><p class="story-text">Community Comic - We will hire a professional comic artist to write comics for the spaceforce dwarfs and future Space Force characters! 50% of the proceeds from comic sales will be put back into the community wallet!</p></div>
                    </div>
                </li>

                <li>
                    <div class="timeline-image"><span>5</span></div>
                    <div class="timeline-panel">
                        <div class="timeline-body"><p class="story-text">Purchase a land plot in one of the Metaverse providers.</p></div>
                    </div>
                </li>

                <li class="timeline-inverted">
                    <div class="timeline-image"><span>6</span></div>
                    <div class="timeline-panel">
                        <div class="timeline-body"><p class="story-text">Build a DWARF SPACE FORCE tavern for drinking, eating and celebrating together, in the Metaverse.</p></div>
                    </div>
                </li>
            </ul>
            
            <div class="row mt-5 mb-5">
                <div class="col-lg-6 mx-auto">
                    <p class="story-text">
                        <b class="sec">"DWARF SPACE FORCE NFTs are not just a rare piece of art. They are also a living evolving being in the digital Metaverse."</b> 0ld3ULL CMO at Branda3ULL.
                    </p>
                    <p class="story-text">Each member of our community will be part of an exclusive elite whose benefits and offerings will only increase over time.</p>
                </div>
            </div>

            <ul class="timeline last">
                <li class="timeline-inverted">
                    <div class="timeline-image xl">
                        <span><a target="_blank" href="https://discord.gg/qQWWsXxsq4">
                            Join the 
                            <br />
                            SPACE FORCE and
                            <br />
                            Let’s GOOOOOOOO!
                            </a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <!-- End: Post Drop-->

    <!-- Start: FAQ -->
    <section class="faq-section" id="faq">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="faq-title text-center pb-3">
                        <h2 class="section-heading">FAQ</h2>
                    </div>
                </div>
                <div class="col-md-6 offset-md-3">
                    <div class="faq" id="accordion">
                        <div class="card">
                            <div class="card-header" id="faqHeading-1">
                                <div class="mb-0">
                                    <h5 class="faq-title" data-bs-toggle="collapse" data-bs-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1" >
                                        <span class="badge">1</span>WHAT IS NFT?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-1" class="collapse" aria-labelledby="faqHeading-1" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <p>NFT (non-fungible token) is an information or data stored on the blockchain. Owning an NFT
                                        means owning the original image, music track, animation - you name it! You can easily trade
                                        any pieces of art as well as store them in your Metamask wallet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="faqHeading-2">
                                <div class="mb-0">
                                    <h5 class="faq-title" data-bs-toggle="collapse" data-bs-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                        <span class="badge">2</span> WHAT IS MINTING?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-2" class="collapse" aria-labelledby="faqHeading-2" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <p>Minting is a process of creation of NFTs. Whenever you put your digital assets on the blockchain
                                    - that’s minting!</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="faqHeading-3">
                                <div class="mb-0">
                                    <h5 class="faq-title" data-bs-toggle="collapse" data-bs-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                        <span class="badge">3</span> HOW MUCH DOES THE MINT COST?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-3" class="collapse" aria-labelledby="faqHeading-3" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <p>Purchasing a DWARF SPACE FORCE NFT costs {{ nftPrice() }} + gas fee. One hour before the
                                        Minting we will release the ETH Price so if you are minting from contract you have it available.
                                        There is no bonding curve!</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="faqHeading-4">
                                <div class="mb-0">
                                    <h5 class="faq-title" data-bs-toggle="collapse" data-bs-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                        <span class="badge">4</span> HOW TO CONTACT THE TEAM?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-4" class="collapse" aria-labelledby="faqHeading-4" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <p>You can reach us on
                                        Twitter <a href="https://twitter.com/DwarfSpace" target="_blank">https://twitter.com/DwarfSpace</a> and Discord <a href="https://discord.gg/qQWWsXxsq4" target="_blank">https://discord.gg/qQWWsXxsq4</a> any time!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End: FAQ -->

    <!-- Start: Team -->
    <section class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">WHO IS ON THE TEAM?</h2>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/1.png" alt="..." />
                        <h4>0ld3ULL</h4>
                        <h5>Jonathan Bouzanquet</h5>
                        <p class="text-muted">CMO at Branda3ULL</p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/2.png" alt="..." />
                        <h4>Socia3ULL</h4>
                        <h5>Pubudu Gokarella</h5>
                        <p class="text-muted">CRO at Branda3ULL</p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/3.jpg" alt="..." />
                        <h4>Exceptiona3ULL</h4>
                        <h5>Izam Kurniawan</h5>
                        <p class="text-muted">Lead Artist</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/4.jpg" alt="..." />
                        <h4>Valua3ULL</h4>
                        <h5>Leon Sutanudjaja</h5>
                        <p class="text-muted">Artist</p>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/5.png" alt="..." />
                        <h4>Happy3ULL</h4>
                        <h5>Kayla Martinez</h5>
                        <p class="text-muted">Social Media Manager</p>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/6.png" alt="..." />
                        <h4>Young3ULL</h4>
                        <h5>Jet Bouzanquet</h5>
                        <p class="text-muted">NFT Specialist</p>
                    </div>
                </div>
                
                <div class="col-lg-3">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/7.png" alt="..." />
                        <h4>Traita3ULL</h4>
                        <h5>Sam Bouzanquet</h5>
                        <p class="text-muted">Character Design</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End: Team -->

    <!-- Footer-->
    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start text-white bow">Copyright &copy; BRANDA3ULL 2021</div>
                <div class="col-lg-4 my-3 my-lg-0">
                    <a class="btn btn-social prim-bg sec mx-2" href="https://twitter.com/DwarfSpace" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="btn prim-bg sec btn-social mx-2" href="https://discord.gg/qQWWsXxsq4"><i class="fab fa-discord" target="_blank"></i></a>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a class="link-dark text-white text-decoration-none me-3 bow" href="#!">Privacy Policy</a>
                    <a class="link-dark text-white text-decoration-none bow" href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
    <!-- Portfolio Modals-->

    <!-- Portfolio item 1 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog mx-auto modal-dialog-centered">
            <div class="modal-content">
                <!-- <div class="close-modal" data-bs-dismiss="modal"><img src="../assets/img/close-icon.svg" alt="Close modal" /></div> -->
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 p-0">
                            <div class="modal-body p-0">
                                <h5 class="text-uppercase bow wallet-modal-title">Connect Your Wallet</h5>
                                <div class="col-lg-11 mt-3 mb-3 mx-auto p-3 wallet-panel">
                                    <div class="wallet-panel-img">
                                        <img src="../assets/img/metamask.svg" alt="metamask"/>
                                    </div>
                                    <div class="wallet-text-wrapper">
                                        <span class="bow wallet-panel-title">In-browser wallet</span>
                                        <span class="bow wallet-panel-subtitle">Use this if you’re using an in-browser wallet.</span>
                                    </div>
                                    <div class="wallet-panel-arrow">
                                        <img src="../assets/img/right-arrow.svg" alt="metamask"/>
                                    </div>
                                </div>

                                <div class="col-lg-11 mt-3 mb-3 mx-auto p-3 wallet-panel">
                                    <div class="wallet-panel-img">
                                        <img src="../assets/img/wallet-connect.svg" alt="wallet connect"/>
                                    </div>
                                    <div class="wallet-text-wrapper">
                                        <span class="bow wallet-panel-title">Wallet Connect</span>
                                        <span class="bow wallet-panel-subtitle">Supports metamask, trustwallet & 30 other wallets.</span>
                                    </div>
                                    <div class="wallet-panel-arrow">
                                        <img src="../assets/img/right-arrow.svg" alt="metamask"/>
                                    </div>
                                </div>
                                <button class="btn btn-primary sec-bg prim col-lg-11 btn-radius btn-xl text-uppercase mb-3 bow btn-shadow" data-bs-dismiss="modal" type="button">
                                    Close
                                </button>
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

import dwarf from '../assets/js/contract'
import Web3 from 'web3'

export default {
  props: {
    msg: String
  },
  data () {
    return {
        web3: null,
        balance: 0,
        account: null,
        contract: null,
        preSale: false,
        publicSale: false,
        maxPreSale: null,
        maxPublicSale: null,
        price: null,
        cost: null,
        time: null,
        mintAmount: 1,
        maxMinting: null,
        minting: false,
        interval: null,
        soldOut: false,
    }
  }, 
async mounted() {
    const now = new Date()
    const launch = new Date(1633651200*1000)
    this.time = launch - now
    await this.connect()

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function () {
            location.reload()
        })

        window.ethereum.on('chainChanged', () => {
            location.reload();
        });
    }

    const $this = this

    this.interval = setInterval(function() {
        $this.getInfo()
    }, 1000)
},
  methods : {
    nftPrice() {
        if (this.price) {
            return this.web3.utils.fromWei(this.price) + ' ETH'
        } else {
            return '-'
        }
    },
    totalCost () {
        if (!this.preSale && !this.publicSale) {
            this.cost = 0
            return '0 ETH'    
        }

        this.cost = this.mintAmount * this.price
        return this.web3.utils.fromWei(this.cost.toString()) + ' ETH'
    },
    decrease() {
        if (this.maxMinting) {
            if (this.mintAmount > 1) {
                this.mintAmount--
            } else {
                this.mintAmount = 1
            }
        }
    },
    increase () {
        if (this.maxMinting) {
            if (this.mintAmount < this.maxMinting) {
                this.mintAmount++
            } else {
                this.mintAmount = this.maxMinting
            }
        }
    },
    saleStarts () {
      this.preSale = true
    },
    addZero (number) {
        if (number < 10) {
            return '0' + number;
        }

        return number
    },
    popup (text, type) {
        this.$swal({
                title: type,
                //text: text,
                icon: type.toLowerCase(),
                toast: true,
                html: text,
                position: 'top-end',
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false
            });
    },
    async mint () {
        let text = null

        if (!this.preSale && !this.publicSale) {
            text = 'Sale is not active yet.'
        }

        if (this.cost <= 0) {
            text = 'Ether value is too low.'
        }

        if (this.balance <= 0) {
            text = 'Insufficient funds.'
        }

        if (text) {
            this.popup(text, 'Error')
            return
        }

        if (this.contract) {
            //var block = await this.web3.eth.getBlock("latest")

            try {
                this.minting = true
                let mint = null
                if (this.preSale) {
                    const fee = await this.contract.methods.preSaleMint(this.mintAmount).estimateGas({from: this.account, value: this.cost})
                    mint = await this.contract.methods.preSaleMint(this.mintAmount).send({from: this.account, value: this.cost, gas: fee})
                } else if (this.publicSale) {
                    const fee = await this.contract.methods.mint(this.mintAmount).estimateGas({from: this.account, value: this.cost})
                    mint = await this.contract.methods.mint(this.mintAmount).send({from: this.account, value: this.cost, gas: fee})
                }

                if (mint.status) {
                    this.minting = false
                    this.popup('Dwarfs minted successfully. <a target="_blank" href="'+process.env.VUE_APP_EXPLORER_URL+mint.transactionHash+'">'+mint.transactionHash+'</a>', 'Success')
                }
            } catch (e) {
                this.minting = false
                var error = e.message.substring(
                    e.message.indexOf("'") + 1, 
                    e.message.lastIndexOf("'")
                )
                if (error) {
                    error = JSON.parse(error)
                    if (error.value.message) {
                        this.popup (error.value.message, 'Error')
                        return
                    }

                    this.popup(error.value.data.message, 'Error')
                    return
                } else {
                    if (e.message.includes('EVM:')) {
                        error = e.message.split('EVM:')[1];
                        if (error) {
                            error = JSON.parse(error)
                            this.popup('Transaction has been reverted. <a target="_blank" href="'+process.env.VUE_APP_EXPLORER_URL+error.transactionHash+'">Click here to view</a>', 'Error')
                            return
                        }
                    }
                    if (e.message.includes('{')) {
                        error = e.message.substr(0, e.message.indexOf('{'));
                        if (error) {
                            this.popup(error, 'Error')
                            return
                        }
                    }
                    this.popup(e.message, 'Error')
                }
            }
        }
    },
    async getInfo() {
        if (this.contract) {
            try {
                const supply = await this.contract.methods.totalSupply().call()
                if (supply >= 10000) {
                    this.soldOut = true
                }

                const info = await this.contract.methods.info().call()

                this.price = info[0]
                this.maxPreSale = info[1]
                this.maxPublicSale = info[2]
                this.preSale = info[3]
                if (info[3]) {
                    this.maxMinting = this.maxPreSale
                }

                this.publicSale = info[4]

                if (info[4]) {
                    this.maxMinting = this.maxPublicSale
                }
            } catch (e) {
                clearInterval(this.interval)
                this.popup('Wrong network selected.', 'Error')
            }
        }
    },
    async connect () {
        if (window.ethereum) {
            await window.ethereum
                .request({
                    method: 'eth_requestAccounts',
                })
                .then((accounts) => {
                    if (accounts.length > 0) {
                        this.account = accounts[0]
                        this.web3 = new Web3(window.ethereum)
                    }
                })
                .catch((error) => {
                    console.log(error)
                    // If the request fails, the Promise will reject with an error.
                })
        } else if (window.web3) {
            this.web3 = await new Web3(window.web3.currentProvider)
        }

        if (this.web3) {
            const networkId = await this.web3.eth.net.getId()
        
            if (networkId != process.env.VUE_APP_CHAIN_ID) {
                this.popup('Plese connect to '+process.env.VUE_APP_NETWORK_NAME, 'Error')
                return
            }

            const amount = await this.web3.eth.getBalance(this.account)
            if (amount > 0) {
                this.balance = parseFloat(this.web3.utils.fromWei(amount)).toFixed(4)
            }

            this.contract = new this.web3.eth.Contract(dwarf.abi(), dwarf.address())

            //var block = await this.web3.eth.getBlock("latest");
        }
    }
  }
}
</script>