<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background: #000; color: #fff; }
          h1 { color: #fff; }
          p.note { font-style: normal; color: #aaa; margin-bottom: 20px; }
          table { border-collapse: collapse; width: 100%; margin-top: 10px; }
          th, td { border: 1px solid #444; padding: 8px; }
          th { background: #111; color: #fff; text-align: left; }
          tr:nth-child(even) { background: #111; }
          tr:nth-child(odd) { background: #000; }
          a { color: #4da6ff; text-decoration: none; }
          a:hover { text-decoration: underline; color: #80cfff; }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <p class="note">Oohhhh! Look everyone 👀👀👀👀👀👀! We got an adventurer!</p>
        <table>
          <tr>
            <th>URL</th>
          </tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
