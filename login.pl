#!/usr/bin/perl
use CGI;
my ($cgi, $nick, $color);

my $cgi = new CGI;
my $nick = $cgi->param('nick');
my $sex = $cgi->param('sex');
print "Content-type: text/html\n\n";
print "Hello World!<br />\n";
print "$nick likes $sex \n";
