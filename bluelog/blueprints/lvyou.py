from flask import render_template, flash, redirect, url_for, request, current_app, Blueprint, abort, make_response
from flask_login import current_user
from bluelog.utils import redirect_back
from bluelog.models import Post, Category

lvyou_bp = Blueprint('lvyou', __name__)
@lvyou_bp.route('/')
def index():
    return render_template('lvyou/index.html')
@lvyou_bp.route('/wukanglu')
def wukanglu():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/wukanglu.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/waitan')
def waitan():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/waitan.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/nanjinglu')
def nanjinglu():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/nanjinglu.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/laonongtang')
def laonongtang():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/laonongtang.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/chenghuangmiao')
def chenghuangmiao():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/chenghuangmiao.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/chuangyiyuan')
def chuangyiyuan():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/chuangyiyuan.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/daxuelu')
def daxuelu():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/daxuelu.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/tianailu')
def tianailu():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/tianailu.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/lvyouluxian')
def lvyouluxian():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/lvyouluxian.html', category=category, pagination=pagination, posts=posts)
@lvyou_bp.route('/gonggao')
def gonggao():
    category = Category.query.get_or_404(2)
    page = request.args.get('page', 1, type=int)
    per_page = current_app.config['BLUELOG_POST_PER_PAGE']
    pagination = Post.query.with_parent(category).order_by(Post.timestamp.desc()).paginate(page, per_page)
    posts = pagination.items
    return render_template('lvyou/jqgg.html', category=category, pagination=pagination, posts=posts)