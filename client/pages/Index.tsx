import { Link } from "react-router-dom";
import { ChevronRight, Sparkles, Trophy, Users, Zap, Youtube, Instagram, MessageSquare } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F5356d108f11249288e5255b89351e917%2F4e7ece59223c4e248c2a85832d8ec49a?format=webp&width=800"
              alt="GamerzLandYT Logo"
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-xl font-bold minecraft-text">GamerzLandYT</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </a>
            <a href="#rules" className="text-sm hover:text-primary transition-colors">
              Rules
            </a>
            <a href="#prizes" className="text-sm hover:text-primary transition-colors">
              Prizes
            </a>
            <div className="flex items-center gap-4 pl-4 border-l border-border">
              <a
                href="https://discord.gg/PKts9cbYQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Discord"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@GAMERZLAND89"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=vlg27nn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <Link
              to="/register"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Register Now
            </Link>
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://discord.gg/PKts9cbYQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@GAMERZLAND89"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=vlg27nn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <Link
              to="/register"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 ml-2"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-card border border-primary/30 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">Now Accepting Registrations</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black minecraft-text leading-tight">
              GamerzLandYT
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Minecraft Bedrock Tournament
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Join the ultimate competitive Bedrock tournament. Battle against the best players, compete for glory,
              and claim your spot on the leaderboard. This is your moment to shine.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/register"
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Register Team Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#details"
                className="group bg-card border border-primary/30 text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-card/80 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Learn More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="details" className="py-16 sm:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold minecraft-text mb-3">Compete for Glory</h3>
                <p className="text-muted-foreground">
                  Test your skills against the top Bedrock players in intense, nail-biting matches.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold minecraft-text mb-3">Form Your Team</h3>
                <p className="text-muted-foreground">
                  Gather your teammates and register as a unified force ready to dominate the competition.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold minecraft-text mb-3">Epic Prizes</h3>
                <p className="text-muted-foreground">
                  Win amazing prizes, exclusive rewards, and the title of Bedrock Champion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Details */}
      <section id="about" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black minecraft-text text-center mb-12">Tournament Details</h2>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold minecraft-text mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Registration Phase
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Teams can register from now until December 31st, 2024. Each team must have a minimum of 3 players
                and a maximum of 5 players. All players must be 13 years or older and agree to the tournament rules.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold minecraft-text mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Tournament Format
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Double elimination tournament with best-of-three matches. Teams compete in strategic PvP battles
                across various Bedrock maps. The tournament will be streamed live with professional commentary.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold minecraft-text mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Prizes & Rewards
              </h3>
              <div className="text-muted-foreground space-y-3">
                <p>🥇 1st Place: 500 RS.</p>   
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="rules" className="py-16 sm:py-24 bg-card/50 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black minecraft-text">Ready to Compete?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss your chance to prove yourself in the ultimate Minecraft Bedrock tournament. Register your team
            today and prepare for battle.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all group"
          >
            Start Registration
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold minecraft-text mb-4">Tournament</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#rules" className="hover:text-primary transition-colors">
                    Rules
                  </a>
                </li>
                <li>
                  <a href="#details" className="hover:text-primary transition-colors">
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold minecraft-text mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://discord.gg/PKts9cbYQ" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@GAMERZLAND89" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=vlg27nn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold minecraft-text mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold minecraft-text mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 GamerzLandYT Minecraft Bedrock Tournament. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <h3>Developed by Sejal Dewangan </h3>
      </footer>
    </div>
  );
}
