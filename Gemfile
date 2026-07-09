source "https://rubygems.org"

# Jekyll 4, built and deployed via GitHub Actions (see .github/workflows/jekyll.yml).
# We deliberately do NOT use the `github-pages` meta-gem: it pins Jekyll to 3.9 and
# locks every downstream gem (kramdown, rouge, sass) to old versions. Building the
# site ourselves in CI lets us track current Jekyll instead.
gem "jekyll", "~> 4.4"
gem "minima", "~> 2.5" # Theme; provides base Sass imported by assets/main.scss.

# Plugins. These used to be provided transitively by the github-pages gem, so they
# must now be declared explicitly or their Liquid tags ({% seo %}, {% feed_meta %})
# silently stop working.
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Windows and JRuby do not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows.
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the
# gem do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Required for `jekyll serve` on Ruby 3.0+, where webrick left the standard library.
gem "webrick", "~> 1.9"
