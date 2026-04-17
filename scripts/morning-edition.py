#!/usr/bin/env python3
"""
Morning Edition - Hacker News Curator
Fetches top stories, curates for Jay's taste, renders as editorial HTML magazine
"""

import requests
import re
from datetime import datetime
from urllib.parse import quote

HN_API = "https://hacker-news.firebaseio.com/v0/topstories.json"
HN_ITEM = "https://hacker-news.firebaseio.com/v0/item/{}.json"

# Jay's interest keywords (weighted for prioritization)
INTERESTS = {
    # High priority - directly actionable
    "ai": 3, "llm": 3, "gpt": 3, "claude": 3, "openai": 3, "anthropic": 3,
    "tool": 2, "api": 2, "agent": 3, "automation": 2,
    "dev": 2, "developer": 2, "engineering": 2,
    # Enterprise & business
    "enterprise": 2, "business": 1, "saas": 2, "productivity": 2,
    # Creative & design
    "design": 2, "creative": 2, "ui": 1, "ux": 1,
    # Privacy & security
    "privacy": 2, "security": 2, "encryption": 2, "open source": 2,
    # Science & weird
    "science": 2, "research": 2, "physics": 2, "biology": 2,
    "weird": 2, "bizarre": 2, "unexpected": 2,
}

# Exclude topics
EXCLUDE = ["cryptocurrency", "crypto", "bitcoin", "ethereum", "nft", "web3"]

def fetch_hn_stories(limit=30):
    """Fetch top stories from HN"""
    resp = requests.get(HN_API, timeout=10)
    story_ids = resp.json()[:limit]
    
    stories = []
    for sid in story_ids:
        try:
            item = requests.get(HN_ITEM.format(sid), timeout=5).json()
            if item and item.get("title"):
                stories.append({
                    "id": sid,
                    "title": item.get("title", ""),
                    "url": item.get("url", f"https://news.ycombinator.com/item?id={sid}"),
                    "score": item.get("score", 0),
                    "comments": item.get("descendants", 0),
                    "by": item.get("by", ""),
                    "time": item.get("time", 0),
                })
        except:
            continue
    return stories

def score_story(story):
    """Score story based on Jay's interests"""
    title = story["title"].lower()
    url = story.get("url", "").lower()
    text = f"{title} {url}"
    
    score = 0
    
    # Check interests
    for keyword, weight in INTERESTS.items():
        if keyword in text:
            score += weight
    
    # Check exclusions
    for exc in EXCLUDE:
        if exc in text:
            score -= 5
    
    # Boost by HN score
    score += min(story.get("score", 0) / 50, 5)
    
    return score

def curate_top_10(stories):
    """Curate top 10 stories matching Jay's taste"""
    scored = [(s, score_story(s)) for s in stories]
    scored.sort(key=lambda x: x[1], reverse=True)
    return [s[0] for s in scored[:10]]

# Visual themes for each spread
SPREADS = [
    # 1. Hero - Big bold editorial
    {"bg": "#FEF3C7", "text": "#1F2937", "accent": "#D97706", 
     "layout": "hero", "num_style": "hero"},
    # 2. Dark/Midnight
    {"bg": "#0F172A", "text": "#E2E8F0", "accent": "#38BDF8",
     "layout": "dark", "num_style": "stamp"},
    # 3. Rose alert stamp
    {"bg": "#FFF1F2", "text": "#881337", "accent": "#E11D48",
     "layout": "alert", "num_style": "alert"},
    # 4. Terminal/Code
    {"bg": "#1A1A1A", "text": "#00FF00", "accent": "#00FF00",
     "layout": "terminal", "num_style": "terminal"},
    # 5. Academic/Drop cap
    {"bg": "#F8F5F1", "text": "#2D3748", "accent": "#744210",
     "layout": "academic", "num_style": "dropcap"},
    # 6. Big stat
    {"bg": "#FFFBEB", "text": "#78350F", "accent": "#F59E0B",
     "layout": "stat", "num_style": "bigstat"},
    # 7. Minimal white
    {"bg": "#FFFFFF", "text": "#000000", "accent": "#2563EB",
     "layout": "minimal", "num_style": "minimal"},
    # 8. Deep green
    {"bg": "#064E3B", "text": "#ECFDF5", "accent": "#34D399",
     "layout": "deep", "num_style": "deep"},
    # 9. Sunset gradient
    {"bg": "linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)", "text": "#FFFFFF", "accent": "#FCD34D",
     "layout": "sunset", "num_style": "sunset"},
    # 10. Big stat finish
    {"bg": "#0D9488", "text": "#F0FDFA", "accent": "#5EEAD4",
     "layout": "finish", "num_style": "finish"},
]

def render_story(story, idx, theme):
    """Render a single story as HTML spread"""
    num = idx + 1
    title = story["title"]
    url = story["url"]
    score = story.get("score", 0)
    comments = story.get("comments", 0)
    hn_link = f"https://news.ycombinator.com/item?id={story['id']}"
    
    # Check for direct apply
    direct_apply = any(k in title.lower() for k in ["python", "api", "automation", "agent", "solana", "crypto"])
    
    num_styles = {
        "hero": f'<div class="num hero-num">{num}</div>',
        "stamp": f'<div class="num stamp-num">{num}</div>',
        "alert": f'<div class="num alert-num">{num}</div>',
        "terminal": f'<div class="num terminal-num">{num:02d}</div>',
        "dropcap": f'<div class="num dropcap-num">{num}</div>',
        "bigstat": f'<div class="num stat-num">{num}</div>',
        "minimal": f'<div class="num minimal-num">#{num}</div>',
        "deep": f'<div class="num deep-num">{num}</div>',
        "sunset": f'<div class="num sunset-num">{num}</div>',
        "finish": f'<div class="num finish-num">{num}</div>',
    }
    
    bg_style = f"background: {theme['bg']}" if theme['bg'].startswith("#") or theme['bg'].startswith("linear") else f"background: {theme['bg']}"
    
    html = f'''
    <div class="spread" style="{bg_style}; color: {theme['text']}">
        {num_styles[theme['num_style']]}
        <div class="content">
            <h2>{title}</h2>
            <div class="meta">
                <span class="score">▲ {score}</span>
                <span class="comments">{comments} comments</span>
                {f'<span class="direct">★ FOR YOU</span>' if direct_apply else ''}
            </div>
            <a href="{url}" class="read-link">Read →</a>
            <a href="{hn_link}" class="hn-link">HN</a>
        </div>
    </div>
    '''
    return html

def generate_magazine(stories, date_str):
    """Generate complete HTML magazine"""
    curated = curate_top_10(stories)
    
    spreads_html = ""
    for idx, story in enumerate(curated):
        theme = SPREADS[idx % len(SPREADS)]
        spreads_html += render_story(story, idx, theme)
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Morning Edition — {date_str}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700;9..144,900&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        
        body {{
            font-family: 'Inter', sans-serif;
            background: #111;
            min-height: 100vh;
        }}
        
        .magazine {{
            max-width: 100%;
        }}
        
        .cover {{
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: white;
            padding: 80px 40px;
            text-align: center;
            border-bottom: 8px solid #E11D48;
        }}
        
        .cover h1 {{
            font-family: 'Fraunces', serif;
            font-size: clamp(48px, 10vw, 120px);
            font-weight: 900;
            letter-spacing: -2px;
            line-height: 1;
            margin-bottom: 20px;
        }}
        
        .cover .date {{
            font-size: 24px;
            opacity: 0.7;
            font-weight: 600;
        }}
        
        .cover .tagline {{
            font-size: 18px;
            margin-top: 30px;
            opacity: 0.5;
            font-style: italic;
            font-family: 'Fraunces', serif;
        }}
        
        .spread {{
            min-height: 70vh;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }}
        
        .content {{
            max-width: 900px;
            margin: 0 auto;
            width: 100%;
        }}
        
        .content h2 {{
            font-family: 'Fraunces', serif;
            font-size: clamp(28px, 5vw, 56px);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 30px;
        }}
        
        .meta {{
            font-size: 20px;
            display: flex;
            gap: 20px;
            align-items: center;
            margin-bottom: 30px;
        }}
        
        .direct {{
            background: #E11D48;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            font-weight: 700;
            font-size: 16px;
        }}
        
        .read-link, .hn-link {{
            font-size: 24px;
            font-weight: 600;
            text-decoration: none;
            color: inherit;
            opacity: 0.8;
            margin-right: 30px;
        }}
        
        .read-link:hover, .hn-link:hover {{
            opacity: 1;
            text-decoration: underline;
        }}
        
        /* Numeral styles */
        .num {{
            position: absolute;
            font-family: 'Fraunces', serif;
            font-weight: 900;
            line-height: 1;
        }}
        
        .hero-num {{
            top: 40px;
            right: 60px;
            font-size: 200px;
            opacity: 0.15;
        }}
        
        .stamp-num {{
            top: 30px;
            right: 30px;
            font-size: 100px;
            background: #38BDF8;
            color: #0F172A;
            padding: 10px 20px;
            border-radius: 8px;
        }}
        
        .alert-num {{
            top: -20px;
            left: 40px;
            font-size: 180px;
            color: #FFE4E6;
        }}
        
        .terminal-num {{
            top: 20px;
            left: 20px;
            font-size: 80px;
            font-family: 'Courier New', monospace;
        }}
        
        .dropcap-num {{
            top: 20px;
            left: 20px;
            font-size: 140px;
            font-family: 'Fraunces', serif;
            opacity: 0.2;
        }}
        
        .stat-num {{
            top: 30px;
            right: 30px;
            font-size: 120px;
            font-family: 'Fraunces', serif;
            opacity: 0.15;
        }}
        
        .minimal-num {{
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 60px;
            font-family: 'Fraunces', serif;
            letter-spacing: 4px;
        }}
        
        .deep-num {{
            bottom: 40px;
            left: 40px;
            font-size: 160px;
            opacity: 0.1;
        }}
        
        .sunset-num {{
            top: 20px;
            right: 20px;
            font-size: 100px;
            font-family: 'Fraunces', serif;
            opacity: 0.3;
        }}
        
        .finish-num {{
            position: absolute;
            bottom: 40px;
            right: 40px;
            font-size: 200px;
            opacity: 0.15;
            font-family: 'Fraunces', serif;
        }}
        
        .footer {{
            background: #111;
            color: #666;
            padding: 40px;
            text-align: center;
            font-size: 16px;
        }}
        
        .footer a {{
            color: #38BDF8;
            text-decoration: none;
        }}
    </style>
</head>
<body>
    <div class="magazine">
        <div class="cover">
            <h1>Morning Edition</h1>
            <div class="date">{date_str}</div>
            <div class="tagline">Curated for Jay — AI, Dev, Enterprise, Weird Science</div>
        </div>
        
        {spreads_html}
        
        <div class="footer">
            <p>Generated by OpenClaw • <a href="https://github.com">GitHub Pages</a></p>
        </div>
    </div>
</body>
</html>'''
    
    return html

def main():
    today = datetime.now()
    date_str = today.strftime("%B %d, %Y")
    filename = today.strftime("%Y-%m-%d") + ".html"
    
    print("Fetching Hacker News...")
    stories = fetch_hn_stories(30)
    print(f"Fetched {len(stories)} stories")
    
    print("Generating magazine...")
    html = generate_magazine(stories, date_str)
    
    output_path = f"/Users/admin/.openclaw/workspace/magazines/{filename}"
    with open(output_path, "w") as f:
        f.write(html)
    
    print(f"Saved to: {output_path}")
    print(f"Shareable URL: https://jayrizz.github.io/jaythakur.com/magazines/{filename}")
    
    # Return the path for Telegram notification
    return output_path

if __name__ == "__main__":
    main()