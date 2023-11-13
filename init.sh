rm -rf ./.git
git init 
git config user.name "embers"
git config user.email "935267851@qq.com"
git commit --allow-empty -m "Initial commit"
git remote add origin https://github.com/pleiades-embers/blog.git
git push -u origin main --force